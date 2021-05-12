# Developer Tools
Let's go over the two tools that make developing Kintone Plug-in easier!

Topics:
  * [Plug-in Packer 📩](#plug-in-packer-)
  * [Plug-in Uploader 📡](#plug-in-uploader-)
    * [How to Use | Dialog Style Login Method](#how-to-use--dialog-style-login-method)
    * [How to Use | Environment Variables Login Method](#how-to-use--environment-variables-login-method)
  * [Using plugin-packer & plugin-uploader Together](#using-plugin-packer--plugin-uploader-together)

Note:
  * These instructions are also [viewable as slides](https://slides.trouni.com/?src=https://raw.githubusercontent.com/ahandsel/Table-Utility-Plug-in/main/Developer_Tools.md#/)
  * `1_Starting_Point` folder is a stand-in for any folder containing the Plug-in file.

## Overview

[@kintone/plugin-packer](https://github.com/kintone/js-sdk/tree/master/packages/plugin-packer) & [@kintone/plugin-uploader](https://github.com/kintone/js-sdk/tree/master/packages/plugin-uploader) are Command-Line Interface (CLI) tools for packaging & uploading Kintone Plug-ins to your Kintone Subdomain (Environment).

Both tools are published on npm and are available for Windows, macOS, & Linux. Their source code is on [kintone/js-sdk](https://github.com/kintone/js-sdk) GitHub Repo.  
Both require Node.js version 6 or later.

If you have any questions regarding developing for the Kintone Web Database platform, post them on the Kintone Developer Program's [General Discussion thread](https://developer.kintone.io/hc/en-us/community/topics/200378107-General-Discussion).

---

## Plug-in Packer 📩

[@kintone/plugin-packer](https://github.com/kintone/js-sdk/tree/master/packages/plugin-packer) is a CLI tool that packages the Plug-in directory to generate Plug-in zip files.  

For more information, refer to [Packaging Plug-In Files Using plugin-packer](https://developer.kintone.io/hc/en-us/articles/360008906274) article.

### How to Install & Use

```sh
$ npm install -g @kintone/plugin-packer

$ cd 1_Starting_Point
$ kintone-plugin-packer [OPTIONS] src
```

| OPTIONS             | Description                                  |
| ------------------- | -------------------------------------------- |
| `--ppk PPK_FILE`    | Optional path to an input private key file.  |
| `--out PLUGIN_FILE` | Optional path for the generated Plug-in file. |
| `--watch`           | Watch `src` folder for changes.              |

---

## Plug-in Uploader 📡

[@kintone/plugin-uploader](https://github.com/kintone/js-sdk/tree/master/packages/plugin-uploader) is a CLI tool to upload Plug-in zip files from your Desktop to Kintone easily.  
For more information, refer to [Uploading Plug-In Files Using plugin-uploader](https://developer.kintone.io/hc/en-us/articles/360009830414) article.

### How to Install

```sh
$ npm install -g @kintone/plugin-uploader
```


### How to Use | Dialog Style Login Method
Specifying only the Plug-in zip file in the command will prompt a dialog.
Input the Kintone subdomain, login name, and password individually.

```sh
$ cd 1_Starting_Point
$ kintone-plugin-uploader plugin.zip
```

Enter environmental information interactively:

```console
? Input your kintone's domain (example.kintone.com): <subdomain>.kintone.com
? Input your username: <user name>
? Input your password: <user password>
> Open https://<subdomain>.kintone.com/login?saml=off
> Trying to log-in...
> Navigate to https://<subdomain>.kintone.com/k/admin/system/plugin/
> Trying to upload plugin.zip
> plugin.zip has been uploaded!
```


### How to Use | Environment Variables Login Method
Environment variables for the Kintone subdomain and login information can be set in advance. Let's save time by not inputting login information per Plug-in upload.  

#### For Windows/ [PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/overview)

Set environment variables with Kintone information in advance by entering the following command in your PowerShell:

```PowerShell
set-item "env:KINTONE_BASE_URL" <subdomain>.kintone.com
set-item "env:KINTONE_USERNAME" <user name>
set-item "env:KINTONE_PASSWORD" <user password>
```

Command prompt execution:  

```sh
$ cd 1_Starting_Point

$ kintone-plugin-uploader plugin.zip
```


#### For Mac/ [Terminal](https://support.apple.com/guide/terminal/welcome/mac)

Set environment variables with Kintone information in advance by entering the following command in your Terminal:

```sh
$ export KINTONE_BASE_URL=<subdomain>.kintone.com
$ export KINTONE_USERNAME=<user name>
$ export KINTONE_PASSWORD=<user password>
```

Terminal execution:  

```sh
$ cd 1_Starting_Point
$ kintone-plugin-uploader plugin.zip
```

---

## Using plugin-packer & plugin-uploader Together
Open 2x terminals and follow the below examples.

### Terminal 1
Run plugin-packer with watch option.  
A `plugin.zip` file is created to monitor changes to the `src` directory.

```sh
$ cd 1_Starting_Point
$ kintone-plugin-packer --watch src
```


### Terminal 2
Run plugin-uploader with watch option.  
The Plug-in file is uploaded to monitor changes to the `src` directory.

```sh
$ cd 1_Starting_Point
$ kintone-plugin-uploader --watch plugin.zip
```

Once the above setup is complete, modifications to the Plug-in's source code will automatically be zipped & uploaded to Kintone. Changes are visible with a simple page refresh.
