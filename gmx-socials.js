class gmx_socials{

    constructor(entry){

        this.styleSheet();

        socials.forEach((entry) => {
                
            var socialNetwork = entry;
            var socialLink = window.location.href;

            this.generateSocialButtons(this.socialLinks(socialNetwork,socialLink),this.socialClass(socialNetwork),this.socialIcon(socialNetwork),this.socialTitle(socialNetwork));
            console.log("Generating..");
            
        });

    }

    // Generate Social Buttons
    generateSocialButtons(socialLink,socialClass,socialIcon,socialTitle){
        
        // Default button
        var defButton = '<a href="'+socialLink+'"><button type="button" class="btn btn-secondary social '+socialClass+'"><i class="'+socialIcon+'"></i> '+socialTitle+'</button></a>';
        
        $(".gmx_inline-socials").append(defButton);
        
    }    

    // Generate needed styles
    styleSheet(){
        
        var fontawesome = '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">';
        var stylesheet = '<style>.social{ color:white; float:left; margin-right:10px; padding-right:18px; padding-top:11px; padding-bottom:11px; padding-left:18px; border-radius:0px; border:0px; transition: all .4s ease; -webkit-transition: all .4s ease; } .social:hover{ margin-top:-15px; } .social i{ margin-right:10px; } .facebook{ background:#3b5999 !important; } .twitter{ background:#55acee !important; } .linkedin{ background:#0077B5 !important; } .telegram{ background:#0088cc !important; } .tumblr{ background:#00405d !important; } .pinterest{ background:#bd081c !important; } .vk{ background:#45668e !important; } .whatsapp{ background:#43d854 !important; }</style>';
        
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
        var s_Twitter = "http://www.linkedin.com/shareArticle?mini=true&amp;url=";
        var s_Linkedin = "https://twitter.com/share?url=";
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
