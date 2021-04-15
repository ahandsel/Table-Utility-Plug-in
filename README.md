# LiveCoding: Table Utility Plug-in Series

Hello there, this repo contains all you need to follow along the Kintone Developer Program (KDP)'s LiveCoding Table Utility Plug-in Series!

Note: These instructions are also [viewable as slides](https://slides.trouni.com/?src=ahandsel/Table-Utility-Plug-in&justify=left#/).

---

## Starting Point

We are starting off with the [Table Numbering Plug-in](https://developer.kintone.io/hc/en-us/articles/360012420813).  
This is a sample Plug-in provided by Kintone to showcase how Kintone Plug-ins work & how they are structured.

Table Numbering Plug-in automatically adds row numbers to table rows each time the record is saved. The numbers are inserted into a [Number field](https://get.kintone.help/k/en/user/app_settings/form/form_parts/number.html) in the [Table](https://get.kintone.help/k/en/user/app_settings/form/form_parts/field_table.html) and automatically re-number themselves when the record is edited & re-saved.

---

### Plug-in directory structure
The Table Numbering Plug-in is located inside the [1_Starting_Point](./1_Starting_Point/) folder and is structured as the following directory tree.

```text
src/  
├── html/  
│       └──── config.html  
|
├── css/  
│       ├──── 51-modern-default.css  
│       └──── config.css  
|
├── js/  
│       ├──── config.js  
│       └──── desktop.js  
|
├── image/  
│       └──── icon.png  
|
└── manifest.json  
```

---

### How to Use the Table Numbering Plug-in?
To test out the Plug-in on your Kintone Subdomain, follow three steps:

### Step 1
Git clone this repository:

```console
git clone https://github.com/ahandsel/Table-Utility-Plug-in
```

Locate the [plugin.zip](1_Starting_Point/plugin.zip) file inside the `1_Starting_Point` folder  
Path: `Table-Utility-Plug-in/1_Starting_Point/plugin.zip`

---

### Step 2
Install the Plug-in into your Kintone Subdomain from the Kintone Administration Setting  
Reference: [Adding/Deleting Plug-Ins (System Administration)](https://get.kintone.help/k/en/admin/system_customization/add_plugin/plugin.html)

![Install Plugin Demo](img/Plugin_Install_Demo.gif)

---

### Step 3
Add the Plug-in to a specific Kintone App that has a [Table](https://get.kintone.help/k/en/user/app_settings/form/form_parts/field_table.html) with a [Number field](https://get.kintone.help/k/en/user/app_settings/form/form_parts/number.html)  
Reference: [Adding Plug-Ins to an App](https://get.kintone.help/k/en/user/app_settings/plugin.html)

![Plugin_Setup_Demo.gif](img/Plugin_Setup_Demo.gif)

---

## Goal!

---

## Getting Started

---

## What are Kintone Plug-ins? 🧩  
![Plugin_Intro.png](img/Plugin_Intro.png)

Kintone Plug-ins are packaged JavaScript customization files that can be imported into a Kintone environment & installed into any App (Web Database). Plug-ins provide an easy way for users to share & set up customizations.
  * Customization files - Where the data manipulation & other customization is stored.
  * Settings page files - Where the GUI settings page for end-users is stored.

For more information on Kintone Plug-ins, refer to [About Kintone Plug-ins](https://developer.kintone.io/hc/en-us/articles/900005169443) article.

---

## What is Kintone? ⚙️  

Kintone is a no-code/low-code cloud platform for teams to easily & effectively share and collaborate on their data.

Add JavaScript, CSS, &/or HTML to enhance the frontend UI/UX of a Kintone App (Web Database). This can include features such as [maps](https://developer.kintone.io/hc/en-us/articles/360000365282), [buttons](https://developer.kintone.io/hc/en-us/articles/360000479881), and [color-coding](https://developer.kintone.io/hc/en-us/articles/212495058).

Read up on how to customize & develop on the Kintone Web Database platform at [developer.kintone.io](https://developer.kintone.io/)!
