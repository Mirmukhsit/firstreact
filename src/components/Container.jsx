import React from "react";
import Card from "./Card";
import './style.css'

const data=[
    {id:1,title : 'banan', info:'mevalar berilgan1',src:'https://cdn.shopify.com/s/files/1/0018/8327/5325/products/6_370x.jpg?v=1669704783%20370w' },
    {id:2,title:'colorful', info:'mevalar berilgan2',src:'https://media.cntraveler.com/photos/546976f2cbbd2620680d9f2f/master/pass/rare-fruits-tout.jpg'},
    {id:3,title:'nok', info:'mevalar berilgan3',src:'https://hips.hearstapps.com/hmg-prod/images/pile-of-ripe-fresh-green-pears-royalty-free-image-133810495-1564414665.jpg' },
    {id:4,title:'qizil nok', info:'mevalar berilgan4',src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBQFxawL8hGHUNd2yW5j2_UZfGwoCMUVGmkCxUER8de_2mHdNc1lDC-5Q0uIyWmJElktY&usqp=CAU'},
    {id:5, title:'olma', info:'mevalar berilgan5',src:'https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834' },
    {id:6,title:'kivi', info:'mevalar berilgan6',src:'https://hips.hearstapps.com/hmg-prod/images/full-frame-shot-of-kiwi-slices-royalty-free-image-742260967-1564092068.jpg'},
    {id:7, title:'asarti', info:'mevalar berilgan7',src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJtfcEMDG_KCr4IcDO8IZlBBLuvhtozBwtw&usqp=CAU'},
    {id:8, title:'ananas va banan', info:'mevalar berilgan8',src:'https://www.dole.com/-/media/project/dole/produce-images/headers/dole-produce-fruit-medley.png?rev=1416123f2d094cd1b7494365948214be&hash=F89C9786C9A5F599A784D7753F82236C'},
  ]

function Container() {
    return (
      <div className='container'>
        {
          data.map((val)=>(
            <Card src={val.src} title={val.title} info={val.info}/>
          ))
        }
          
      </div>
    )
  }
  
  export default Container