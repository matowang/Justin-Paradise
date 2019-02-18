Live site can be viewed on https://www.justinhoong.com/

project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Steps to download dependencies
1. Download [VSCode](https://code.visualstudio.com/)
2. Download [Git](https://git-scm.com/)
3. Clone github repository in terminal
```
git clone https://github.com/matowang/Justin-Paradise.git
```
![screenshot of github clone link location](https://i.imgur.com/2neVh7x.png)

4. Install [Node.js](https://nodejs.org/en/)

## Start up editor

1. Drag justin-paradise into vscode

![screenshot of justin-paradise file source](https://i.imgur.com/zNyw9R5.png)

2. Open terminal ( Ctrl + Shift + ` )
3. Run `npm start` in terminal. 

![screenshot of terminal](https://i.imgur.com/4Hfc1OS.png)

This will open a local server of Justin Paradise Website. It updates whenever you hit save.

![screenshot of local host](https://i.imgur.com/s0mEhvg.png)

## Edit and upload changes/images/data

1. goto src > data > articles

![screenshot of articles path](https://i.imgur.com/5QOa55f.png)

2. Edit articles-data.json
```json
[
    {
        "id": 123456,
        "title": "Article Template",
        "author": {
            "firstName": "Matthew",
            "middleName": "",
            "lastName": "Wang",
            "title": ""
        },
        "intro": "Markdown is a lightweight and easy-to-use syntax for styling all forms of writing on the GitHub platform.",
        "date": {
            "month": 12,
            "day": 31,
            "year": 2018
        },
        "frontImg": {
            "src": "/article-template/front-img.png",
            "alt": "Front picture description",
            "top": "50%",
            "left": "0%"
        },
        "contentSrc": "/article-template/content.md"
    },
    {
        "id": 123656,
        "title": "Article Template1",
        "author": {
            "firstName": "Matthew",
            "middleName": "",
            "lastName": "Wang",
            "title": ""
        },
        "intro": "Markdown is a lightweight and easy-to-use syntax for styling all forms of writing on the GitHub platform.",
        "date": {
            "month": 12,
            "day": 31,
            "year": 2018
        },
        "frontImg": {
            "src": "/article-template1/front-img.jpg",
            "alt": "Front picture description",
            "top": "50%",
            "left": "0%"
        },
        "contentSrc": "/article-template/content.md"
    }
]
```
*articles-page.json*

3. Right click the articles folder and create "New Folder" for your article 

![screenshot of how to create new folder](https://i.imgur.com/LLbb9lT.png)

4. Add your front image and markdown file into that folder

5. Edit articles-page.json to change the path location of the front image and contentSrc

![articles-page.json screenshot](https://i.imgur.com/SkGERKG.png)

*articles-page.json*

6. Make sure to save files (Ctrl + S)
7. Upload to real site by typing these 3 commands in terminal
- `git add .`
- `git commit -m "message of what you did"`
- `git push`

Now you're done! Wasn't that easy? Just wait a few minutes for the website to build and revisit [www.justinhoong.com](https://www.justinhoong.com)

## Tips
- Before you start making changes next time make sure to run `git pull` in the terminal. This will make sure your files are in sync with the master branch (the current most updated files).
- To put images into markdown use the `![description of image](imgurl)` format. For this article, I uploaded my images to [imgur](https://imgur.com/a/KP1v5Kl) and copied the image link. To copy image link, right click the image and click "Copy image address"

![screenshot of copying address of image](https://i.imgur.com/1TgDV55.png)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

