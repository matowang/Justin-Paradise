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