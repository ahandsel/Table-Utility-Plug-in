# Developer Tools

## Overview

[@kintone/plugin-packer](https://github.com/kintone/js-sdk/tree/master/packages/plugin-packer) & [@kintone/plugin-uploader](https://github.com/kintone/js-sdk/tree/master/packages/plugin-uploader) are Command-Line Interface (CLI) tools for packaging & uploading Kintone Plug-ins to your Kintone Subdomain (Environment).

Both tools are published on npm and is available for Windows, macOS, & Linux. Their source code is on [kintone/js-sdk](https://github.com/kintone/js-sdk) GitHub Repo.  
Both requires Node.js version 6 or later.

If you have any questions regarding developing for the Kintone Web Database platform, post them on the Kintone Developer Program's [General Discussion thread](https://developer.kintone.io/hc/en-us/community/topics/200378107-General-Discussion).

---

### Plug-in Packer 📩

[@kintone/plugin-packer](https://github.com/kintone/js-sdk/tree/master/packages/plugin-packer) is a CLI tool that packages the Plug-in directory to generate Plug-in zip files.  

For more information, refer to [Packaging Plug-In Files Using plugin-packer](https://developer.kintone.io/hc/en-us/articles/360008906274) article.

#### How to Install & Use

```console
$ npm install -g @kintone/plugin-packer

$ cd sample_project
$ kintone-plugin-packer [OPTIONS] src
```

| OPTIONS             | Description                                  |
| ------------------- | -------------------------------------------- |
| `--ppk PPK_FILE`    | Optional path to an input private key file.  |
| `--out PLUGIN_FILE` | Optional path for the generated plugin file. |
| `--watch`           | Watch `src` folder for changes.              |

---

### Plug-in Uploader 📡

[@kintone/plugin-uploader](https://github.com/kintone/js-sdk/tree/master/packages/plugin-uploader) is a CLI tool to easily upload Plug-in zip files from your Desktop to Kintone.  

For more information, refer to [Uploading Plug-In Files Using plugin-uploader](https://developer.kintone.io/hc/en-us/articles/360009830414) article.

#### How to Install & Use

```console
$ npm install -g @kintone/plugin-uploader

$ cd sample_project
$ kintone-plugin-uploader plugin.zip

# Enter environmental information interactively
? Input your kintone's domain (example.kintone.com): <subdomain>.kintone.com
? Input your username: <user name>
? Input your password: <user password>
> Open https://<subdomain>.kintone.com/login?saml=off
> Trying to log-in...
> Navigate to https://<subdomain>.kintone.com/k/admin/system/plugin/
> Trying to upload plugin.zip
> plugin.zip has been uploaded!
```

---

### Using plugin-packer & plugin-uploader Together

Open 2x terminals and follow the below examples.

```console
# Change to the directory containing the Plug-in file
$ cd 1_Starting_Point
```

#### Terminal 1
Run plugin-packer with watch option.  
A plugin.zip file is created to monitor changes to the `src` directory.

```console
$ kintone-plugin-packer --watch src
```

#### Terminal 2
Run plugin-uploader with watch option.  
The Plug-in file is uploaded to monitor changes to the `src` directory

```console
$ kintone-plugin-uploader --watch plugin.zip
```

Once the above set up is complete, modifications to the Plug-in's source code will automatically be zipped & uploaded to Kintone. Changes are visible with a simple page refresh.
