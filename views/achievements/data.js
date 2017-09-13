const description = [
    'Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their',
    'tiny stature, and even others for their massive size.',
  ].join(' ')
const data = [
 { group:"rewards",
   type:"Standing Ovation",
   month:"August",
   postTimestamp:"Thu Aug 30 2017 19:03:35 GMT+0530 (IST)",
    winners:[{
       name:"Shashank",
       image:"images/man.svg",
       description:description
   },
   {
       name:"Jimit",
       image:"images/man.svg",
       description:description
   },
   {
       name:"Animesh",
       image:"images/man.svg",
       description:description
   },
   {
       name:"Vinod",
       image:"images/man.svg",
       description:description
   }]
 }, 
 { group:"rewards",
   type:"Star of the month",
   month:"August",
   postTimestamp:"Thu Aug 30 2017 19:03:35 GMT+0530 (IST)",
   winners:[{  
       name:"Divya",
       image:"images/woman.svg",
       description:description
   },{  
       name:"Hemasunder",
       image:"images/man.svg",
       description:description
   },
   {
       name:"Anusha",
       image:"images/woman.svg",
       description:description
   },
   {
       name:"Geeta",
       image:"images/woman.svg",
       description:description
   }]
 },
 {
    group:"sports",
    type:"Table Tennis",
    subType:"Men's Singles",
    postTimestamp:"Thu Aug 31 2017 19:03:35 GMT+0530 (IST)",
    
    winners:[
        {
            name:"Chandra",
            image:"images/man.png",
                   rank:"1",
        },
        {
            name:"Rakesh",
            image:"images/man.png",
                   rank:"2",
        }, 
       {
       name:"Jimit",
       image:"images/man.png",
              rank:"3",
       }]
    } ,
    {
        group:"sports",
        type:"Cricket",
        subType:"",
        postTimestamp:"Thu Aug 31 2017 19:03:35 GMT+0530 (IST)",
        
        winners:[
            {
                name:"Royal Challengers Bellandur",
                image:"images/man.png",
                       rank:"1",
            },
            {
                name:"Crazy Compozed",
                image:"images/man.png",
                       rank:"2",
            }, 
           {
           name:"Allstate United",
           image:"images/man.png",
                  rank:"3",
           }]
        },
        {
            group:"sports",
            type:"Badminton",
            subType:"Men's Singles",
            postTimestamp:"Thu Aug 31 2017 19:03:35 GMT+0530 (IST)",
            
            winners:[
                {
                    name:"Dinesh",
                    image:"images/man.png",
                           rank:"1",
                },
                {
                    name:"Satya",
                    image:"images/man.png",
                           rank:"2",
                }, 
               {
               name:"Kunal",
               image:"images/man.png",
                      rank:"3",
               }]
            },
        {
            group:"cultural",
            type:"Singing",
            postTimestamp:"Thu Aug 31 2017 19:03:35 GMT+0530 (IST)",
            winners:[
                {
                    name:"Master",
                    image:"images/man.png",
                           rank:"1",
                },
                {
                    name:"Sameer",
                    image:"images/man.png",
                           rank:"2",
                }, 
               {
               name:"Meenu",
               image:"images/man.png",
                      rank:"3",
               }]
            } ,
            {
                group:"cultural",
                type:"Dancing",
                postTimestamp:"Thu Aug 31 2017 19:03:35 GMT+0530 (IST)",
                winners:[
                    {
                        name:"Thiru",
                        image:"images/man.png",
                               rank:"1",
                    },
                    {
                        name:"Swapnil",
                        image:"images/man.png",
                               rank:"2",
                    }, 
                   {
                   name:"Raman",
                   image:"images/man.png",
                          rank:"3",
                   }]
                }  
]
export default data;
