### gmx-socials-js
Integrate Social Networks sharing in your website easily with this javascript library.

![alt text](https://i.imgur.com/SYGwnJv.png)
![alt text](https://i.imgur.com/AvcrR5V.png)
![alt text](https://i.imgur.com/IRbJzso.png)

### How to use:

First, load gmx-socials.js:
```
     <!-- jQuery first, then gmxsocials.js-->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script type="text/javascript" type="" src="gmx-socials.js"></script>
```

Second, set the socials you want to use and style of buttons:
```
    <!-- Config your socials and link here -->
    <script>
    // Social Name => Link
    var socials = [
       'Facebook',
       'Twitter',
       'Linkedin',
       'Tumblr',
       'VK',
       'Pinterest',
       'WhatsApp',
       'Telegram'
     ];
     
     /*
     Buttons Style
     Styles avaliable
     1-> "default"
     2-> "icon_squared"
     3-> "icon_rounded"
     */
     
     var style = "icon_rounded"
     
     let s = new gmx_socials(socials,style);
    </script>
```


