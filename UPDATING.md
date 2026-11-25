# Updating the upstream version

This package builds [ckpool](https://github.com/skaisser/ckpool) from source in its own `Dockerfile`.

## Determining the upstream version

The fork cuts git tags but not always GitHub releases, and its `configure.ac` still carries Con Kolivas' `0.9.9`, so the tags are the version:

```sh
git ls-remote --tags https://github.com/skaisser/ckpool.git 'refs/tags/v*'
```

The current pin is the `CKPOOL_REF` build argument in `Dockerfile`.

## Applying the bump

1. Set `CKPOOL_REF` in `Dockerfile` to the new tag, `CKPOOL_COMMIT` to the commit it points to, and `CKPOOL_SIGNING_KEY` to the key that signed it. The build fails unless the tag resolves to that commit and verifies against that key. The fork signs each tag with an SSH key from its author's GitHub account, and not always the same one:

   ```sh
   git ls-remote https://github.com/skaisser/ckpool.git 'refs/tags/<tag>^{}'   # the commit
   gh api users/skaisser/ssh_signing_keys --jq '.[].key'                       # candidate keys
   gh api repos/skaisser/ckpool/git/tags/<sha of refs/tags/<tag>> --jq .verification.reason   # must be "valid"
   ```

   Find the key that signed it by trying each candidate as the only `allowed_signers` entry for `git verify-tag` in a clone of the tag; exactly one passes.

2. Build the image (`make x86`). `patches/apply.py` asserts the expected hit count of every patch it applies, so a line that moved upstream fails the build with the patch that needs reanchoring named. Reanchor it against the new source rather than loosening the assertion. The node-compatibility patches prevent a pool that starts and mines nothing; the two logging patches prevent miner text from forging health-check failures. Retire them when upstream both normalizes embedded line breaks in `logmsg` and marks continuation chunks in `LOGMSGSIZ`.
