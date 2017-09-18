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
       name:"Person 1",
       image:"images/man.svg",
       description:description
   },
   {
       name:"Person 2",
       image:"images/man.svg",
       description:description
   },
   {
       name:"Person 3",
       image:"images/man.svg",
       description:description
   },
   {
       name:"Person 4",
       image:"images/man.svg",
       description:description
   }]
 }, 
 { group:"rewards",
   type:"Star of the month",
   month:"August",
   postTimestamp:"Thu Aug 30 2017 19:03:35 GMT+0530 (IST)",
   winners:[{  
       name:"Person 1",
       image:"images/woman.svg",
       description:description
   },{  
       name:"Person 2",
       image:"images/man.svg",
       description:description
   },
   {
       name:"Person 3",
       image:"images/woman.svg",
       description:description
   },
   {
       name:"Person 4",
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
            name:"Person 1",
            image:"images/man.png",
                   rank:"1",
        },
        {
            name:"Person 2",
            image:"images/man.png",
                   rank:"2",
        }, 
       {
       name:"Person 3",
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
                name:"Team 1",
                image:"images/man.png",
                       rank:"1",
            },
            {
                name:"Team 2",
                image:"images/man.png",
                       rank:"2",
            }, 
           {
           name:"Team 3",
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
                    name:"Person 1",
                    image:"images/man.png",
                           rank:"1",
                },
                {
                    name:"Person 2",
                    image:"images/man.png",
                           rank:"2",
                }, 
               {
               name:"Person 3",
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
                    name:"Person 1",
                    image:"images/man.png",
                           rank:"1",
                },
                {
                    name:"Person 2",
                    image:"images/man.png",
                           rank:"2",
                }, 
               {
               name:"Person 3",
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
                        name:"Person 1",
                        image:"images/man.png",
                               rank:"1",
                    },
                    {
                        name:"Person 2",
                        image:"images/man.png",
                               rank:"2",
                    }, 
                   {
                   name:"Person 3",
                   image:"images/man.png",
                          rank:"3",
                   }]
                }  
]
export default data;
