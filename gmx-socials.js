class gmx_socials{

    constructor(entry,style){

        this.styleSheet(style);

        socials.forEach((entry) => {
                
            var socialNetwork = entry;
            var socialLink = window.location.href;

            this.generateSocialButtons(this.socialLinks(socialNetwork,socialLink),this.socialClass(socialNetwork),this.socialIcon(socialNetwork),this.socialTitle(socialNetwork),style);
            console.log("Generating..");
            
        });

    }

    // Generate Social Buttons
    generateSocialButtons(socialLink,socialClass,socialIcon,socialTitle,style){
        
        // Default button
        if(style == "default"){
            var defButton = '<a href="'+socialLink+'"><button type="button" class="btn btn-secondary gmx-social '+socialClass+'"><i class="'+socialIcon+'"></i> '+socialTitle+'</button></a>';
        }else{
            var defButton = '<a href="'+socialLink+'"><button type="button" class="btn btn-secondary gmx-social '+socialClass+'"><i class="'+socialIcon+'"></i></button></a>';
        }
        
        $(".gmx_inline-socials").append(defButton);
        
    }    

    // Generate needed styles 
    styleSheet(style){
        
        var fontawesome = '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">';
        var stylesheet_default = '<style>.gmx-social{ color:white; float:left; margin-right:10px; padding-right:14px; font-size:13px; padding-top:8px; padding-bottom:8px; padding-left:14px; border-radius:0px; border:0px; transition: all .4s ease; -webkit-transition: all .4s ease; } .gmx-social:hover{ margin-top:-15px; } .gmx-social i{ margin-right:10px; } .facebook{ background:#3b5999 !important; } .twitter{ background:#55acee !important; } .linkedin{ background:#0077B5 !important; } .telegram{ background:#0088cc !important; } .tumblr{ background:#00405d !important; } .pinterest{ background:#bd081c !important; } .vk{ background:#45668e !important; } .whatsapp{ background:#43d854 !important; }</style>';
        var stylesheet_icon_squared = '<style>.gmx-social{ color: white; float: left; margin-right: 10px; padding-right: 14px; padding-top: 8px; padding-bottom: 8px; font-size: 13px; font-weight: 700; padding-left: 14px; border-radius: 0px; border: 0px; transition: all .4s ease; -webkit-transition: all .4s ease; } .gmx-social:hover{ margin-top:-15px; } .gmx-social i{ margin-right:0px; } .facebook{ background:#3b5999 !important; } .twitter{ background:#55acee !important; } .linkedin{ background:#0077B5 !important; } .telegram{ background:#0088cc !important; } .tumblr{ background:#00405d !important; } .pinterest{ background:#bd081c !important; } .vk{ background:#45668e !important; } .whatsapp{ background:#43d854 !important; }</style>';
        var stylesheet_icon_rounded = '<style>.gmx-social { color: white; float: left; border-radius: 50% !important; margin-right: 10px; /* padding-right: 14px; */ /* padding-top: 8px; */ /* padding-bottom: 8px; */ font-size: 13px; font-weight: 700; width: 35px; height: 35px; /* padding-left: 14px; */ /* border-radius: 0px; */ border: 0px; transition: all .4s ease; -webkit-transition: all .4s ease; text-align: center; } .gmx-social:hover{ margin-top:-15px; } .gmx-social i{ margin-right:0px; } .facebook{ background:#3b5999 !important; } .twitter{ background:#55acee !important; } .linkedin{ background:#0077B5 !important; } .telegram{ background:#0088cc !important; } .tumblr{ background:#00405d !important; } .pinterest{ background:#bd081c !important; } .vk{ background:#45668e !important; } .whatsapp{ background:#43d854 !important; }</style>';
        
        if(style == "default"){
            var stylesheet = stylesheet_default;
        }else if(style == "icon_squared"){
            var stylesheet = stylesheet_icon_squared;
        }else if(style == "icon_rounded"){
            var stylesheet = stylesheet_icon_rounded;
        }
        
        $("head").append(fontawesome);
        $("head").append(stylesheet);
    }

    // Create the ICON
    socialIcon(socialNetwork){
            
        var socialNetwork = socialNetwork.toLowerCase();    
            
        var s_Facebook = "fab fa-facebook-f";     
        var s_Twitter = "fab fa-twitter";
        var s_Linkedin = "fab fa-linkedin-in";
        var s_Tumblr = "fab fa-tumblr";
        var s_VK = "fab fa-vk";
        var s_WhatsApp = "fab fa-whatsapp";
        var s_Pinterest = "fab fa-pinterest-p";
        var s_Telegram = "fab fa-telegram-plane";
        
        var s_Social = "";
        
        if(socialNetwork == "facebook"){ s_Social = s_Facebook;  }
        if(socialNetwork == "twitter"){ s_Social = s_Twitter;  }
        if(socialNetwork == "linkedin"){ s_Social = s_Linkedin;  }
        if(socialNetwork == "tumblr"){ s_Social = s_Tumblr;  }
        if(socialNetwork == "vk"){ s_Social = s_VK;  }
        if(socialNetwork == "whatsapp"){ s_Social = s_WhatsApp;  }
        if(socialNetwork == "pinterest"){ s_Social = s_Pinterest;  }
        if(socialNetwork == "telegram"){ s_Social = s_Telegram;  }
        
        return s_Social;
                
    }

    socialClass(socialNetwork){
        
    var socialNetwork = socialNetwork.toLowerCase();    
        
    var s_Facebook = "facebook";     
    var s_Twitter = "twitter";
    var s_Linkedin = "linkedin";
    var s_Tumblr = "tumblr";
    var s_VK = "vk";
    var s_WhatsApp = "whatsapp";
    var s_Pinterest = "pinterest";
    var s_Telegram = "telegram";
    
    var s_Social = "";
    
    if(socialNetwork == "facebook"){ s_Social = s_Facebook;  }
    if(socialNetwork == "twitter"){ s_Social = s_Twitter;  }
    if(socialNetwork == "linkedin"){ s_Social = s_Linkedin;  }
    if(socialNetwork == "tumblr"){ s_Social = s_Tumblr;  }
    if(socialNetwork == "vk"){ s_Social = s_VK;  }
    if(socialNetwork == "whatsapp"){ s_Social = s_WhatsApp;  }
    if(socialNetwork == "pinterest"){ s_Social = s_Pinterest;  }
    if(socialNetwork == "telegram"){ s_Social = s_Telegram;  }
    
    return s_Social;
            
    }    

    socialLinks(socialNetwork,socialLink){
        
        var socialNetwork = socialNetwork.toLowerCase();    
            
        var s_Facebook = "http://www.facebook.com/sharer.php?u=";     
        var s_Twitter = "https://twitter.com/share?url=";
        var s_Linkedin = "http://www.linkedin.com/shareArticle?mini=true&amp;url=";
        var s_Tumblr = "http://www.tumblr.com/share/link?url=";
        var s_VK = "http://vkontakte.ru/share.php?url=";
        var s_Pinterest = "http://pinterest.com/pin/create/link/?url=";
        var s_WhatsApp = "whatsapp://send?text="; // Only works for mobile
        var s_Telegram = "tg://share?url="; // Only works for mobile
        
        var s_Social = "";
        
        if(socialNetwork == "facebook"){ s_Social = s_Facebook;  }
        if(socialNetwork == "twitter"){ s_Social = s_Twitter;  }
        if(socialNetwork == "linkedin"){ s_Social = s_Linkedin;  }
        if(socialNetwork == "tumblr"){ s_Social = s_Tumblr;  }
        if(socialNetwork == "vk"){ s_Social = s_VK;  }
        if(socialNetwork == "whatsapp"){ s_Social = s_WhatsApp;  }
        if(socialNetwork == "pinterest"){ s_Social = s_Pinterest;  }
        if(socialNetwork == "telegram"){ s_Social = s_Telegram;  }
        
        s_Social = s_Social+socialLink;
        
        return s_Social;   
        
    }

    socialTitle(socialNetwork){
            
        var socialNetwork = socialNetwork.toLowerCase();    
            
        var s_Facebook = "Facebook";     
        var s_Twitter = "Twitter";
        var s_Linkedin = "Linkedin";
        var s_Tumblr = "Tumblr";
        var s_VK = "VK";
        var s_WhatsApp = "WhatsApp";
        var s_Pinterest = "Pinterest";    
        var s_Telegram = "Telegram";
        
        var s_Social = "";
        
        if(socialNetwork == "facebook"){ s_Social = s_Facebook;  }
        if(socialNetwork == "twitter"){ s_Social = s_Twitter;  }
        if(socialNetwork == "linkedin"){ s_Social = s_Linkedin;  }
        if(socialNetwork == "tumblr"){ s_Social = s_Tumblr;  }
        if(socialNetwork == "vk"){ s_Social = s_VK;  }
        if(socialNetwork == "whatsapp"){ s_Social = s_WhatsApp;  }
        if(socialNetwork == "pinterest"){ s_Social = s_Pinterest;  }
        if(socialNetwork == "telegram"){ s_Social = s_Telegram;  }
        
        return s_Social;
                
    }   


}
