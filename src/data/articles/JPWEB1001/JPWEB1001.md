## steps to upload info to justin paradise
1. Download vscode
2. Download Git
3. Clone github repository in terminal
`git clone https://github.com/matowang/Justin-Paradise.git`
4. Drag justin-paradise into vscode
5. Install node.js
6. run `npm start`
7. goto src > data > articles
8. edit articles-data.json
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
9. Add markdown file src to contentSrc in articles-data.json
```json
"contentSrc": "/article-template/content.md"
```
10. Upload to real site
- `git add .`
- `git commit -m "message of what you did"`
- `git push`
