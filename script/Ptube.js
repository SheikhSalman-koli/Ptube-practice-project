/**
 * {
  "status": true,
  "message": "successfully fetched all the categories",
  "categories": [
    {
      "category_id": "1001",
      "category": "Music"
    },
    {
      "category_id": "1003",
      "category": "Comedy"
    },
    {
      "category_id": "1005",
      "category": "Drawing"
    }
  ]
}

 */


/**
 * authors
: 
Array(1)
0
: 
{profile_picture: 'https://i.ibb.co/D9wWRM6/olivia.jpg', profile_name: 'Olivia Mitchell', verified: ''}
length
: 
1
[[Prototype]]
: 
Array(0)
category_id
: 
"1001"
description
: 
"Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
others
: 
posted_date
: 
"16278"
views
: 
"100K"
[[Prototype]]
: 
Object
thumbnail
: 
"https://i.ibb.co/L1b6xSq/shape.jpg"
title
: 
"Shape of You"
video_id
: 
"aaaa"
 */

const loadCategoryBtn =async () => {
        const res =await fetch(`https://openapi.programming-hero.com/api/phero-tube/categories`)
        const data =await res.json()
        displaycategories(data.categories)
}
const loadVideos =async () =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/phero-tube/videos`)
    const data = await response.json()
    displayVideos(data.videos)
}


function displayVideosCategories (catId){
    const urls =`https://openapi.programming-hero.com/api/phero-tube/category/${catId}`
    fetch(urls)
    .then(res => res.json())
    .then(data => {
        displayVideos(data.category)
    })
}


const displaycategories=(categories)=>{
    const categoryBtncon = document.getElementById('categoryBtn')
   
    categories.forEach(btn => {
        // console.log(btn)
        const categorybtnDiv = document.createElement('div')
        categorybtnDiv.innerHTML = `
        <button onclick="displayVideosCategories(${btn.category_id})" class="btn btn-sm">${btn.category}</button>
        `
        categoryBtncon.append(categorybtnDiv)
    });
        // console.log(categories)
}
const displayVideos = (videos) => {
    // console.log(videos)
    const videosSection= document.getElementById('videosSection')
    videosSection.innerHTML = ``
    videos.forEach(video => {
        // console.log(video)
        const videosDiv = document.createElement('div')
        videosDiv.innerHTML = `
   <div class="card bg-base-100">
                <figure class="relative">
                  <img class="w-full h-[160px] object-cover"
                    src="${video.thumbnail}"
                    alt="Shoes" />
                    <p class="absolute bottom-2 right-2 bg-slate-700 text-white rounded px-3 py-1">9hrs 49min ago</p>
                </figure>
                <div class="px-0 flex gap-4 mt-5">
                  <div class="">
                    <div class="avatar">
                        <div class="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                          <img src="${video.authors[0].profile_picture}" />
                        </div>
                      </div>
                  </div>
                  <div class="space-y-2">
                    <h1 class="text-xl font-bold">Building a Winning UX Strategy Using the Kano Model</h1>
                    <p class="text-sm text-gray-600 flex gap-3">${video.authors[0].profile_name}
                        <img class="w-5 h-5" src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png" alt="">
                    </p>
                    <p class="text-sm text-gray-600">${video.others.views
                    } views</p>
                  </div>
                  
                </div>
              </div>
        `
        videosSection.append(videosDiv)
    })
}

loadCategoryBtn()

