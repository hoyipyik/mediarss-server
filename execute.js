let express = require("express")
let app = express()
// app
app.use(require('body-parser')())
// body-parser
app.set('port', process.env.PORT || 6000)
// port 

const channels = {
    "TED" : {
      "icon" : "https://yt3.ggpht.com/ytc/AKedOLRTHraf4M_OaDZFwfqK8F9TTjxe3DHwFZMkZGqmAw=s176-c-k-c0x00ffffff-no-rj",
      "id" : 0,
      "link" : "https://www.youtube.com/user/TEDtalksDirector",
      "links" : [ {
        "channellink" : "https://www.youtube.com/user/TEDtalksDirector",
        "id" : 0,
        "videoimage" : "https://i.ytimg.com/vi/2XkZhn5Ypzo/hqdefault.jpg",
        "videolink" : "https://www.youtube.com/embed/2XkZhn5Ypzo",
        "videotitle" : "Jota Samper: The informal settlements reshaping the world | TED"
      }, {
        "channellink" : "https://www.youtube.com/user/TEDtalksDirector",
        "id" : 1,
        "videoimage" : "https://i.ytimg.com/vi/fAJ18o5mw70/hqdefault.jpg",
        "videolink" : "https://www.youtube.com/embed/fAJ18o5mw70",
        "videotitle" : "Jim Chuchu: Why are stolen African artifacts still in Western museums? | TED"
      }, {
        "channellink" : "https://www.youtube.com/user/TEDtalksDirector",
        "id" : 2,
        "videoimage" : "https://i.ytimg.com/vi/PveqmDnqZw4/hqdefault.jpg",
        "videolink" : "https://www.youtube.com/embed/PveqmDnqZw4",
        "videotitle" : "Miracle Jones: The radical, revolutionary resilience of Black joy | TED"
      }, {
        "channellink" : "https://www.youtube.com/user/TEDtalksDirector",
        "id" : 3,
        "videoimage" : "https://i.ytimg.com/vi/wBRqxBvBWQE/hqdefault.jpg",
        "videolink" : "https://www.youtube.com/embed/wBRqxBvBWQE",
        "videotitle" : "Ma Jun: An interactive map to track (and end) pollution in China | TED"
      }, {
        "channellink" : "https://www.youtube.com/user/TEDtalksDirector",
        "id" : 4,
        "videoimage" : "https://i.ytimg.com/vi/0BF2Np5J6jY/hqdefault.jpg",
        "videolink" : "https://www.youtube.com/embed/0BF2Np5J6jY",
        "videotitle" : "Nigel Topping: 3 rules for a zero-carbon world | TED"
      }],
      "poster" : "https://fjdsfjasd.img",
      "title" : "TED"
    },
    "Greenred Productions - Relaxing Music" : {
      "icon" : "https://yt3.ggpht.com/ytc/AKedOLS8-DTkJqfe1YoYpqF3FGUHrz12Qj3cAXvimUoP=s176-c-k-c0x00ffffff-no-rj",
      "id" : 1,
      "link" : "https://www.youtube.com/c/GreenredProductions/videos",
      "links" : [ {
        "channellink" : "https://www.youtube.com/c/GreenredProductions/videos",
        "id" : 0,
        "videoimage" : "https://i.ytimg.com/vi/l8hhJzrrn10/hqdefault.jpg",
        "videolink" : "https://www.youtube.com/embed/l8hhJzrrn10",
        "videotitle" : "Healing Music with 417 Hz Solfeggio Frequency, Relaxing Music, Meditation Music for Stress Relief"
      }, {
        "channellink" : "https://www.youtube.com/c/GreenredProductions/videos",
        "id" : 1,
        "videoimage" : "https://i.ytimg.com/vi/smCrzsk1Tj0/hqdefault.jpg",
        "videolink" : "https://www.youtube.com/embed/smCrzsk1Tj0",
        "videotitle" : "Binaural Beats Music for Happiness and Inner Peace, Calming Music, Relaxing Music"
      } ],
      "poster" : "https://fjdsfjasd.img",
      "title" : "Beautiful Relaxing Music"
    },
    "MIT OpenCourseWare" : {
      "icon" : "https://yt3.ggpht.com/ytc/AKedOLS8-DTkJqfe1YoYpqF3FGUHrz12Qj3cAXvimUoP=s176-c-k-c0x00ffffff-no-rj",
      "id" : 2,
      "link" : "https://www.youtube.com/c/mitocw/videos",
      "links" : [ {
        "channellink" : "https://www.youtube.com/c/mitocw/videos",
        "id" : 0,
        "videoimage" : "https://i.ytimg.com/vi/33w-baH49rA/hqdefault.jpg",
        "videolink" : "https://www.youtube.com/embed/33w-baH49rA",
        "videotitle" : "Oxidative Phosphorylation/Photosynthesis I"
      }, {
        "channellink" : "https://www.youtube.com/c/mitocw/videos",
        "id" : 1,
        "videoimage" : "https://i.ytimg.com/vi/jtSfWlQbmNY/hqdefault.jpg",
        "videolink" : "https://www.youtube.com/embed/jtSfWlQbmNY",
        "videotitle" : "Feynman Calculus: Fermi's Golden Rule"
      },{
        "channellink" : "https://www.youtube.com/c/mitocw/videos",
        "id" : 2,
        "videoimage" : "https://i.ytimg.com/vi/Cx5Z-OslNWE/hqdefault.jpg",
        "videolink" : "https://www.youtube.com/embed/Cx5Z-OslNWE",
        "videotitle" : "Course Introduction of 18.065 by Professor Strang"
      } ],
      "poster" : "https://fjdsfjasd.img",
      "title" : "MIT OpenCourseWare"
    } 
}

const list = [ {
    "getmsg" : "/TED",
    "icon" : "",
    "id" : 0,
    "title" : "TED"
  }, {
    "getmsg" : "/Greenred_Productions_-_Relaxing_Music",
    "icon" : "",
    "id" : 1,
    "title" : "Greenred Productions - Relaxing Music"
  }, {
    "getmsg" : "/MIT_OpenCourseWare",
    "icon" : "",
    "id" : 0,
    "title" : "MIT OpenCourseWare"
  } ]



app.get(/^\/channels(\/.+)*$/, (req, res)=>{
    let url = req.url
    console.log(url)
    let channel_name = url.slice(10, url.length - 5).split("_").join(" ").toString()
    console.log(channel_name)
    let send_dict = channels[channel_name]
    console.log(send_dict)
    res.send(send_dict)
})


// app.get('/channels/TED.js',(req, res)=>{
//     let send_dict = {
//             "icon" : "https://yt3.ggpht.com/ytc/AKedOLRTHraf4M_OaDZFwfqK8F9TTjxe3DHwFZMkZGqmAw=s176-c-k-c0x00ffffff-no-rj",
//             "id" : 0,
//             "link" : "https://www.youtube.com/user/TEDtalksDirector",
//             "links" : [ {
//             "channellink" : "https://www.youtube.com/user/TEDtalksDirector",
//             "id" : 0,
//             "videoimage" : "https://i.ytimg.com/vi/2XkZhn5Ypzo/hqdefault.jpg",
//             "videolink" : "https://www.youtube.com/embed/2XkZhn5Ypzo",
//             "videotitle" : "Jota Samper: The informal settlements reshaping the world | TED"
//             }, {
//             "channellink" : "https://www.youtube.com/user/TEDtalksDirector",
//             "id" : 1,
//             "videoimage" : "https://i.ytimg.com/vi/fAJ18o5mw70/hqdefault.jpg",
//             "videolink" : "https://www.youtube.com/embed/fAJ18o5mw70",
//             "videotitle" : "Jim Chuchu: Why are stolen African artifacts still in Western museums? | TED"
//             }, {
//             "channellink" : "https://www.youtube.com/user/TEDtalksDirector",
//             "id" : 2,
//             "videoimage" : "https://i.ytimg.com/vi/PveqmDnqZw4/hqdefault.jpg",
//             "videolink" : "https://www.youtube.com/embed/PveqmDnqZw4",
//             "videotitle" : "Miracle Jones: The radical, revolutionary resilience of Black joy | TED"
//             }, {
//             "channellink" : "https://www.youtube.com/user/TEDtalksDirector",
//             "id" : 3,
//             "videoimage" : "https://i.ytimg.com/vi/wBRqxBvBWQE/hqdefault.jpg",
//             "videolink" : "https://www.youtube.com/embed/wBRqxBvBWQE",
//             "videotitle" : "Ma Jun: An interactive map to track (and end) pollution in China | TED"
//             }, {
//             "channellink" : "https://www.youtube.com/user/TEDtalksDirector",
//             "id" : 4,
//             "videoimage" : "https://i.ytimg.com/vi/0BF2Np5J6jY/hqdefault.jpg",
//             "videolink" : "https://www.youtube.com/embed/0BF2Np5J6jY",
//             "videotitle" : "Nigel Topping: 3 rules for a zero-carbon world | TED"
//             }],
//             "poster" : "https://fjdsfjasd.img",
//             "title" : "TED"
//         }

//     res.send(send_dict)
//     console.log("TED")
// })

// // 不能使用空格，将空格修改为下划线
// // getmsg 以及


// app.get('/channels/Greenred Productions - Relaxing Music.js', (req, res)=>{
//     let send_dict = {
//             "icon" : "https://yt3.ggpht.com/ytc/AKedOLS8-DTkJqfe1YoYpqF3FGUHrz12Qj3cAXvimUoP=s176-c-k-c0x00ffffff-no-rj",
//             "id" : 1,
//             "link" : "https://www.youtube.com/c/GreenredProductions/videos",
//             "links" : [ {
//             "channellink" : "https://www.youtube.com/c/GreenredProductions/videos",
//             "id" : 0,
//             "videoimage" : "https://i.ytimg.com/vi/l8hhJzrrn10/hqdefault.jpg",
//             "videolink" : "https://www.youtube.com/embed/l8hhJzrrn10",
//             "videotitle" : "Healing Music with 417 Hz Solfeggio Frequency, Relaxing Music, Meditation Music for Stress Relief"
//             }, {
//             "channellink" : "https://www.youtube.com/c/GreenredProductions/videos",
//             "id" : 1,
//             "videoimage" : "https://i.ytimg.com/vi/smCrzsk1Tj0/hqdefault.jpg",
//             "videolink" : "https://www.youtube.com/embed/smCrzsk1Tj0",
//             "videotitle" : "Binaural Beats Music for Happiness and Inner Peace, Calming Music, Relaxing Music"
//             } ],
//             "poster" : "https://fjdsfjasd.img",
//             "title" : "Beautiful Relaxing Music"
//         }

//     res.send(send_dict)
//     console.log("Greenred Productions - Relaxing Music")
// })

// app.get('/channels/MIT OpenCourseWare.js', (req, res)=>{
//     let send_dict = {
//             "icon" : "https://yt3.ggpht.com/ytc/AKedOLS8-DTkJqfe1YoYpqF3FGUHrz12Qj3cAXvimUoP=s176-c-k-c0x00ffffff-no-rj",
//             "id" : 2,
//             "link" : "https://www.youtube.com/c/mitocw/videos",
//             "links" : [ {
//             "channellink" : "https://www.youtube.com/c/mitocw/videos",
//             "id" : 0,
//             "videoimage" : "https://i.ytimg.com/vi/33w-baH49rA/hqdefault.jpg",
//             "videolink" : "https://www.youtube.com/embed/33w-baH49rA",
//             "videotitle" : "Oxidative Phosphorylation/Photosynthesis I"
//             }, {
//             "channellink" : "https://www.youtube.com/c/mitocw/videos",
//             "id" : 1,
//             "videoimage" : "https://i.ytimg.com/vi/jtSfWlQbmNY/hqdefault.jpg",
//             "videolink" : "https://www.youtube.com/embed/jtSfWlQbmNY",
//             "videotitle" : "Feynman Calculus: Fermi's Golden Rule"
//             },{
//             "channellink" : "https://www.youtube.com/c/mitocw/videos",
//             "id" : 2,
//             "videoimage" : "https://i.ytimg.com/vi/Cx5Z-OslNWE/hqdefault.jpg",
//             "videolink" : "https://www.youtube.com/embed/Cx5Z-OslNWE",
//             "videotitle" : "Course Introduction of 18.065 by Professor Strang"
//             } ],
//             "poster" : "https://fjdsfjasd.img",
//             "title" : "MIT OpenCourseWare"
//         }

//     res.send(send_dict)
//     console.log("MIT OpenCourseWare")
// })

app.get('/list.json', (req, res)=>{
    let list0 =  [ {
        "getmsg" : "/TED",
        "icon" : "",
        "id" : 0,
        "title" : "TED"
        }, {
        "getmsg" : "/Greenred_Productions_-_Relaxing_Music",
        "icon" : "",
        "id" : 1,
        "title" : "Greenred Productions - Relaxing Music"
        }, {
        "getmsg" : "/MIT_OpenCourseWare",
        "icon" : "",
        "id" : 0,
        "title" : "MIT OpenCourseWare"
        } ]

    res.send(list0)
    console.log("successfully send list.json.")
})

// // 使用的是link.json（我自己的测试是home.json）这里是link.json
app.post('/link.json', (req, res)=>{
    url = req.body
    console.log(req)
    let sending_data = "post successful"
    res.send(sending_data)
    console.log("successfully sending")
})

// listen
app.listen(app.get('port'), ()=>{
    console.log("Express started on http://localhost:" +
     app.get("port") +
      ";press Ctrl - C to terminate....")
})
// listen, listen the port 
