export class UserInfo {
    constructor({ nameSelector, jobSelector, avatarSelector }) {
        this._userName = document.querySelector(nameSelector);
        this._userJob = document.querySelector(jobSelector);
        this._avatar = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        this._userInfo = {};
        this._userInfo.userName = this._userName.textContent;
        this._userInfo.userJob = this._userJob.textContent;
        return this._userInfo;
    }

    setUserInfo(name, job, avatar) {
        this._userName.textContent = name;
        this._userJob.textContent = job;
        this._avatar.src = avatar;
    }



}