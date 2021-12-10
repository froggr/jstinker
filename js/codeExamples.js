const exampleCode = {
    'Lightbulb': {
        'html': '<\!--\nEXAMPLE: 3 Dec 2021 - This light bulb!\n\nIn this session we started off introducing you to some basics in programming.\nWe talked about:\n\n- variables\n- control structions / conditionals\n\nWe used these two above concepts to control a dimmable lightbulb.\n\nPlay around with the code in the javascript section below to test the lightbulb.\n\nAny ideas how we can change the javascript code below? \n-->\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<\!-- This is just some HTML for us to see the lightbulb in the preview -->\n<p>The light is set to: <span id="lightAmount"></span>  %</p>\n<div class="light-box" style="background-color: rgb(255 235 0 / 0%)">\n    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path d="M19 6.734c0 4.164-3.75 6.98-3.75 10.266h-1.992c.001-2.079.996-3.826 1.968-5.513.913-1.585 1.774-3.083 1.774-4.753 0-3.108-2.518-4.734-5.004-4.734-2.482 0-4.996 1.626-4.996 4.734 0 1.67.861 3.168 1.774 4.753.972 1.687 1.966 3.434 1.967 5.513h-1.991c0-3.286-3.75-6.103-3.75-10.266 0-4.343 3.498-6.734 6.996-6.734 3.502 0 7.004 2.394 7.004 6.734zm-4 11.766c0 .276-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5zm0 2c0 .276-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5zm-1.701 3.159c-.19.216-.465.341-.752.341h-1.094c-.287 0-.562-.125-.752-.341l-1.451-1.659h5.5l-1.451 1.659zm-.931-14.659h-.689v-1h.689v1zm.913 0h-.428v-1h.807l-.379 1zm-2.531 0l-.396-1h.834v1h-.438zm4.25-.995c-1.622 3.654-2.38 5.049-2.38 8.995h-1.241c0-3.946-.757-5.341-2.379-8.995h.776c1.172 2.851 1.988 3.997 2.224 7.021.234-3.024 1.052-4.17 2.223-7.021h.777z"/></svg>\n</div>',
        'js': `/** \n* this is the javascript code. This is what we played with in the session! \n**/\n\n// We create our variable to store the amount of light.\nvar lightAmount = 0;\n\n\n/* \nWe use a control structure called an "if statement" if order to ask\nsome questions and make some decisions on what we want our light to do.\nI created a little helper function that will set the light amount in the \npreview box over to the right --------->\n\nCan you describe what is happening below?\n*/\n\nif(lightAmount > 100){\n    setLightAmount(0)\n}\nelse if(lightAmount > 0) {\n    setLightAmount(lightAmount)\n}\nelse {\n    setLightAmount(0);\n}\n\n\n\n\n\n\n\n/*****\n * below is called a function. A function allows us to to bundle a collection of  \n * tasks that can be reused over and over again.\n ****/\n\nfunction setLightAmount(amount) {\n    // this code allows us to set the amount of light in the in the preview\n    var lightBulb = document.getElementsByClassName('light-box');\n    lightBulb[0].style.backgroundColor = 'rgb(255 235 0 / ' + amount +'%)';\n    document.getElementById('lightAmount').innerHTML = amount;\n}  \n`,
        'css': '/* this is some CSS code. Css is the "paint" in a webpage. It allows us to\ndraw out designs on the screen.\n*/\n\n\n\n/* \nlets make the background of the page black and text white. \nThe page is called the "body" */\nbody {\n    background-color: black;\n    color: white;\n}\n\n/* lets put a box around the light bulb, give it a border and rounded corners */ \n.light-box {\n    width: 400px;\n    text-align: center;\n    padding: 30px;\n    margin: 20px;\n    border: 1px solid gray;\n    border-radius: 5px;\n}'
    },
    'Lightbulb BOOM': {
        'html': `<\!--\nREVIEW: 10 Dec 2021 - Lightbulb Go BOOM!\n\nWe'll start off by reviewing what we learned last week. And then we'll start\nlearning about what arrays and functions are!\n\nControl the lightbulb using the slider below it.\n-> What happens?\n-> How do we fix it??!\n\n-->\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<\!-- This is just some HTML for us to see the lightbulb in the preview -->\n<p>The light is set to: <span id="lightAmount"></span>  %</p>\n<div class="light-box" style="background-color: rgb(255 235 0 / 0%)">\n    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path d="M19 6.734c0 4.164-3.75 6.98-3.75 10.266h-1.992c.001-2.079.996-3.826 1.968-5.513.913-1.585 1.774-3.083 1.774-4.753 0-3.108-2.518-4.734-5.004-4.734-2.482 0-4.996 1.626-4.996 4.734 0 1.67.861 3.168 1.774 4.753.972 1.687 1.966 3.434 1.967 5.513h-1.991c0-3.286-3.75-6.103-3.75-10.266 0-4.343 3.498-6.734 6.996-6.734 3.502 0 7.004 2.394 7.004 6.734zm-4 11.766c0 .276-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5zm0 2c0 .276-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5zm-1.701 3.159c-.19.216-.465.341-.752.341h-1.094c-.287 0-.562-.125-.752-.341l-1.451-1.659h5.5l-1.451 1.659zm-.931-14.659h-.689v-1h.689v1zm.913 0h-.428v-1h.807l-.379 1zm-2.531 0l-.396-1h.834v1h-.438zm4.25-.995c-1.622 3.654-2.38 5.049-2.38 8.995h-1.241c0-3.946-.757-5.341-2.379-8.995h.776c1.172 2.851 1.988 3.997 2.224 7.021.234-3.024 1.052-4.17 2.223-7.021h.777z"/></svg>\n    <img src="http://gifimage.net/wp-content/uploads/2017/08/transparent-fire-gif.gif" id="tooMuch" />\n</div>\n<input type="range" min="0" max="105" value="1" class="slider" oninput="controlLight(this.value);">\n\n`,
        'js': `} // don't worry about this line!!\n\n/** \n* this is the javascript code. This is what we played with in the session! \n**/\n\n// We create our variable to store the amount of light.\n// var lightAmount = 199;\n\n\n/* \nWe use a control structure called an "if statement" if order to ask\nsome questions and make some decisions on what we want our light to do.\nI created a little helper function that will set the light amount in the \npreview box over to the right --------->\n\nCan you describe what is happening below?\n*/\nfunction controlLight(lightAmount){\n    \n    setLightAmount(lightAmount);\n\n}\n\n\n\n\n\n\n/*****\n * below is called a function. A function allows us to to bundle a collection of  \n * tasks that can be reused over and over again.\n ****/\n\nfunction setLightAmount(amount) {\n    // this code allows us to set the amount of light in the in the preview\n    var lightBulb = document.getElementsByClassName('light-box');\n    if(amount <= 100){\n        lightBulb[0].style.backgroundColor = 'rgb(255 235 0 / ' + amount +'%)';\n        document.getElementById('lightAmount').innerHTML = amount;\n    }\n    else{\n        document.getElementsByTagName('body')[0].style.backgroundColor = 'rgb(255 0 0 / 100';\n        document.getElementById('tooMuch').style.display = 'block';\n        document.getElementById('lightAmount').innerHTML = 'BOOM';\n    }\n}  \n\n\n\n\n\n\n{`,
        'css': '/* this is some CSS code. Css is the "paint" in a webpage. It allows us to\ndraw out designs on the screen.\n*/\n\n\n\n/* \nlets make the background of the page black and text white. \nThe page is called the "body" */\nbody {\n    background-color: black;\n    color: white;\n}\n\n/* lets put a box around the light bulb, give it a border and rounded corners */ \n.light-box {\n    width: 400px;\n    text-align: center;\n    padding: 30px;\n    margin: 20px;\n    border: 1px solid gray;\n    border-radius: 5px;\n    position: relative;\n}\n#tooMuch {\n    position: absolute;\n    height: 100%;\n    top: 0;\n    left: 50px;\n    display:none;\n}'
    },
    'Room Lights BOOM': {
        'html': `<\!--\nExercise: 10 Dec 2021 - Room Lights BOOM!\n\nWe're going to look at functions. Review variables. Talk about objects!\n\nAdd some lightbulbs and set the light in the room.\n-> What happens?\n-> How do we fix it??!\n\n-->\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<\!-- This is just some HTML for us to see the lightbulb in the preview -->\n<p>The light is set to: <span id="lightAmount"></span>  %</p>\n<button class="btn btn-sm btn-secondary" onclick="addLight()">Add Light</button>\n<div class="row m-1">\n    <div class="light-box col-8" style="background-color: rgb(255 235 0 / 0%)">\n        <span id="lightSection"></span>\n        <img src="http://gifimage.net/wp-content/uploads/2017/08/transparent-fire-gif.gif" id="tooMuch" />\n    </div>\n    <div id="lightControl" class="light-control col-4">\n        \n    </div>\n</div>\n\n\n `,
        'js': `} // don't worry about this line!!\n\n/** \n* this is the javascript code. This is what we played with in the session! \n**/\n\n// We create our variable to store the amount of light.\n// var lightAmount = 199;\n\n\n/* \nWe use a control structure called an "if statement" if order to ask\nsome questions and make some decisions on what we want our light to do.\nI created a little helper function that will set the light amount in the \npreview box over to the right --------->\n\nCan you describe what is happening below?\n*/\n\nvar maxLight = 500;\nvar lightDetails = {};\n\nfunction controlLight(lightAmount,id){\n    \n    setLightAmount(lightAmount,id);\n\n}\n\n\n/*****\n * below is called a function. A function allows us to to bundle a collection of  \n * tasks that can be reused over and over again.\n ****/\n\nfunction setLightAmount(amount,id) {\n    // this code allows us to set the amount of light in the in the preview\n    \n    if(amount <= 100){\n        document.getElementById(id).style.opacity = amount/100;\n        lightDetails[id].amount = parseInt(amount);\n        setRoomBrightness();\n    }\n    else{\n        goBoom();\n    }\n}  \n\nfunction setRoomBrightness(){\n    let currentLight = 0;\n    for(var id in lightDetails) {\n        currentLight += lightDetails[id].amount;\n    };\n    console.log(currentLight);\n    if(currentLight > maxLight) goBoom();\n    else {\n        var lightBox = document.getElementsByClassName('light-box');\n        lightBox[0].style.backgroundColor = 'rgb(255 235 0 / ' + (currentLight/5) +'%)';\n    }\n    document.getElementById('lightAmount').innerHTML = currentLight/5;\n}\n\nfunction goBoom(){\n    document.getElementsByTagName('body')[0].style.backgroundColor = 'rgb(255 0 0 / 100';\n    document.getElementById('tooMuch').style.display = 'block';\n    document.getElementById('lightAmount').innerHTML = 'BOOM';\n}\n\nfunction addLight(){\n    reWireLights();\n    var id = Math.random().toString(16).substr(2, 8); // 6de5ccda\n    var svg = '<svg id="'+id+'" style="left:'+Math.floor(Math.random()*(100-1+1)+1)+'%;bottom:'+Math.floor(Math.random()*(100-1+1)+1)+'%;" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path d="M19 6.734c0 4.164-3.75 6.98-3.75 10.266h-1.992c.001-2.079.996-3.826 1.968-5.513.913-1.585 1.774-3.083 1.774-4.753 0-3.108-2.518-4.734-5.004-4.734-2.482 0-4.996 1.626-4.996 4.734 0 1.67.861 3.168 1.774 4.753.972 1.687 1.966 3.434 1.967 5.513h-1.991c0-3.286-3.75-6.103-3.75-10.266 0-4.343 3.498-6.734 6.996-6.734 3.502 0 7.004 2.394 7.004 6.734zm-4 11.766c0 .276-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5zm0 2c0 .276-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5zm-1.701 3.159c-.19.216-.465.341-.752.341h-1.094c-.287 0-.562-.125-.752-.341l-1.451-1.659h5.5l-1.451 1.659zm-.931-14.659h-.689v-1h.689v1zm.913 0h-.428v-1h.807l-.379 1zm-2.531 0l-.396-1h.834v1h-.438zm4.25-.995c-1.622 3.654-2.38 5.049-2.38 8.995h-1.241c0-3.946-.757-5.341-2.379-8.995h.776c1.172 2.851 1.988 3.997 2.224 7.021.234-3.024 1.052-4.17 2.223-7.021h.777z"/></svg>';\n    document.getElementById('lightSection').innerHTML += svg;\n    var control = '<input type="range" min="0" max="105" value="1" class="slider" oninput="controlLight(this.value,\\''+id+'\\');">';\n    document.getElementById('lightControl').innerHTML += control;\n    lightDetails[id] = {'amount' : 0};\n    setRoomBrightness();\n    \n}\nfunction reWireLights(){\n    for(var id in lightDetails) {\n        document.getElementById(id).style.opacity = 0;\n        lightDetails[id].amount = 0;\n    };\n}\n\n{`,
        'css': '/* this is some CSS code. Css is the "paint" in a webpage. It allows us to\ndraw out designs on the screen.\n*/\n\n\n\n/* \nlets make the background of the page black and text white. \nThe page is called the "body" */\nbody {\n    background-color: black;\n    color: white;\n}\n\n/* lets put a box around the light bulb, give it a border and rounded corners */ \n.light-box {\n    text-align: center;\n    padding: 30px;\n    border: 1px solid gray;\n    border-radius: 5px;\n    position: relative;\n    min-height: 300px;\n    overflow: hidden;\n}\n\n.light-box svg{\n    position: absolute;\n    opacity: 0;\n}\n.light-box svg path {\n    fill : white;\n}\n\n#tooMuch {\n    position: absolute;\n    height: 100%;\n    top: 0;\n    left: 0px;\n    display:none;\n}\n.slider{width:100%;}\n'
    }
}