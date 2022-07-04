$('#myDropdown').ddslick({
   onSelected: function(selectedData){
       //callback function: do something with selectedData;
   }   
});

var ddData = [
   {
       text: "Facebook",
       value: 1,
       selected: false,
       description: "Description with Facebook",
       imageSrc: "https://i.imgur.com/XkuTj3B.png"
   },
   {
       text: "Twitter",
       value: 2,
       selected: false,
       description: "Description with Twitter",
       imageSrc: "https://i.imgur.com/8ScLNnk.png"
   },
   {
       text: "LinkedIn",
       value: 3,
       selected: true,
       description: "Description with LinkedIn",
       imageSrc: "https://i.imgur.com/aDNdibj.png"
   },
   {
       text: "Foursquare",
       value: 4,
       selected: false,
       description: "Description with Foursquare",
       imageSrc: "https://i.imgur.com/kFAk2DX.png"
   }
];

$('#myDropdown').ddslick({
   data:ddData,
   width:300,
   selectText: "Select your preferred social network",
   imagePosition:"right",
   onSelected: function(selectedData){
       //callback function: do something with selectedData;
   }   
});