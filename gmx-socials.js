"use strict";

// Generate Social Buttons
function generateSocialButtons(socialLink,socialClass,socialIcon,socialTitle){
    
    // Default button
    var defButton = '<a href="'+socialLink+'"><button type="button" class="btn btn-secondary social '+socialClass+'"><i class="'+socialIcon+'"></i> '+socialTitle+'</button></a>';
    
    $(".gmx_inline-socials").append(defButton);
    
}    

// Generate needed styles
function styleSheet(){
    
    var fontawesome = '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">';
    var stylesheet = '<style>.social{ color:white; float:left; margin-right:10px; padding-right:18px; padding-top:11px; padding-bottom:11px; padding-left:18px; border-radius:0px; border:0px; transition: all .4s ease; -webkit-transition: all .4s ease; } .social:hover{ margin-top:-15px; } .social i{ margin-right:10px; } .facebook{ background:#3b5999 !important; } .twitter{ background:#55acee !important; } .linkedin{ background:#0077B5 !important; } </style>';
    var bootstrap_css = '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">';
    
    $("head").append(bootstrap_css);
    $("head").append(fontawesome);
    $("head").append(stylesheet);
}

// Create the ICON
function socialIcon(socialNetwork){
        
    var socialNetwork = socialNetwork.toLowerCase();    
        
    var s_Facebook = "fab fa-facebook-f";     
    var s_Twitter = "fab fa-twitter";
    var s_Linkedin = "fab fa-linkedin-in";
    
    var s_Social = "";
    
    if(socialNetwork == "facebook"){ s_Social = s_Facebook;  }
    if(socialNetwork == "twitter"){ s_Social = s_Twitter;  }
    if(socialNetwork == "linkedin"){ s_Social = s_Linkedin;  }
    
    return s_Social;
            
}

function socialClass(socialNetwork){
        
    var socialNetwork = socialNetwork.toLowerCase();    
        
    var s_Facebook = "facebook";     
    var s_Twitter = "twitter";
    var s_Linkedin = "linkedin";
    
    var s_Social = "";
    
    if(socialNetwork == "facebook"){ s_Social = s_Facebook;  }
    if(socialNetwork == "twitter"){ s_Social = s_Twitter;  }
    if(socialNetwork == "linkedin"){ s_Social = s_Linkedin;  }
    
    return s_Social;
            
}    

function socialLinks(socialNetwork,socialLink){
    
    var socialNetwork = socialNetwork.toLowerCase();    
        
    var s_Facebook = "http://www.facebook.com/sharer.php?u=";     
    var s_Twitter = "http://www.linkedin.com/shareArticle?mini=true&amp;url=";
    var s_Linkedin = "https://twitter.com/share?url=";
    
    var s_Social = "";
    
    if(socialNetwork == "facebook"){ s_Social = s_Facebook;  }
    if(socialNetwork == "twitter"){ s_Social = s_Twitter;  }
    if(socialNetwork == "linkedin"){ s_Social = s_Linkedin;  }
    
    s_Social = s_Social+socialLink;
    
    return s_Social;   
    
}

function socialTitle(socialNetwork){
        
    var socialNetwork = socialNetwork.toLowerCase();    
        
    var s_Facebook = "Facebook";     
    var s_Twitter = "Twitter";
    var s_Linkedin = "Linkedin";
    
    var s_Social = "";
    
    if(socialNetwork == "facebook"){ s_Social = s_Facebook;  }
    if(socialNetwork == "twitter"){ s_Social = s_Twitter;  }
    if(socialNetwork == "linkedin"){ s_Social = s_Linkedin;  }
    
    return s_Social;
            
}   

styleSheet();

socials.forEach(function(entry) {
        
    var socialNetwork = entry[0];
    var socialLink = entry[1];

    generateSocialButtons(socialLinks(socialNetwork,socialLink),socialClass(socialNetwork),socialIcon(socialNetwork),socialTitle(socialNetwork));
    console.log("Generating..");
    
});
