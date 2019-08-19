### TL;DR

A cli too that I used to remember my credentials such as what email I use to login on twitter. The data is saved in json file and is encrypted (at least people dont understand it)

---

I build this to help me remember my credentials, like, "what was email i use to login on twitter" or "what's my twitter password?". I've got a lot of account, gmail, linkdin, twitter, heroku, github, etc. It is impossible to remember all of them, because sometimes I use different password. I used to save it in plain text, but I also don't want someone else to see it, I could however put the file in deep path folder but then I forgot where the file I put in.

So with this, I just can run some commands and they just pop up. This is not the most secure tool on earth, in fact this is very simple tool that I build just to help me.

### Installation

- clone this repo
- create `.env` file
- put `SALT=supersecret` on that file
- run command `yarn link` or `npm link`
- that's all. It should be available on your machine

### Usage

```
command :
- add
- show
- delete

example :
my-cred add
```
