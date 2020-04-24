# Control_Blur_Effect_On_Lock_Screen
Control the Blur Effect on Lock Screen which is newly introduced in GNOME 3.36

with the introduction of new lock screen in GNOME 3.36, the background is blurred.
with this extension you can control the blur effect.

you must compile the schemas to control the blur effect. To do so,
1. copy the file `org.gnome.shell.extensions.blur.gschema.xml` which is inside schemas directory to `$HOME/.local/share/glib-2.0/schemas`
2. and run the command `glib-compile-schemas ./` from the directory `$HOME/.local/share/glib-2.0/schemas`

Please note that, when you download the extension from gnome-extensions.org website,
the subdirectory `schemas` you wont be able to see due to restrictions while uploading.
Dont enable the extension until you make the directory structure as show in last image below.
you will not be able to use your desktop if you failed to do so.

````
$ gsettings list-recursively | grep blur
org.gnome.shell.extensions.blur brightness 0.55000000000000004
org.gnome.shell.extensions.blur sigma 1
````

![dconf-editor](https://i.stack.imgur.com/k9lSw.png)

![lock screen](https://i.stack.imgur.com/XCB8h.jpg)

![directory structure](https://i.stack.imgur.com/y1is6.png)

Extension Icon Used in gnome-extensions.org site is the credit of https://materialdesignicons.com/ (https://github.com/google/material-design-icons/blob/master/LICENSE).
