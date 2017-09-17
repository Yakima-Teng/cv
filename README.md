# CV of Yakima Teng

## Screenshots

What this CV looks like in PC:
![](./screenshots/part1.png)

What this CV looks like in mobile device:
![](./screenshots/part2.png)

Established by Yakima Teng

## Development

Type the following command to start the development process, it will open a webpage in your browser and refresh the page automatically when changes to your development files are detected.
```bash
npm run dev
```

## Deploy to server through sftp

Script like 'npm run deploy' defined in the package.json file won't be available at your first use. You need to open gruntfile.js and revise configuration under scp.options and scp.your_target to make it available. One small tip here:
Before you make any changes under the key "scp", you can first cd to your project root and then use the command below to avoid committing and pushing your local private information to the remote repository accidentally:
```bash
git update-index --assume-unchanged gruntfile.js
```
Later, in case that you want again to restore the trace of file you ignored before, just cd to your project root and type command like below:
```bash
git update-index --no-assume-unchanged gruntfile.js
```

## Deploy to remote repositories providing Pages function

I employed a npm package named "gh-pages", please visit its official websites for details. For usage examples, you can also refer to the following commands defined in package.json file:

```bash
"scripts": {
    ...
    "deployToGithub": "gh-pages -d dist/cv",
    "deployToOSChina": "gh-pages -d dist/cv -b oschina-pages -o oschina -r https://git.oschina.net/yakima/cv.git",
    ...
},
```

## Notes

1. Tools: Grunt, VueJS1+ (actually, I am in favor of gulp and webpack other then grunt, it seems to be too slow in action speed -_-. I used it here because I havn't had any experience of its usage before.)
2. Online demo: [http://www.yxeye.com/cv/](http://www.yxeye.com/cv/)

## License

The MIT License (MIT)
