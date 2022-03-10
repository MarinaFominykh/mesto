export class UserInfo {
    constructor({ nameSelector, jobSelector }) {
        this._userName = document.querySelector(nameSelector);
        this._userJob = document.querySelector(jobSelector);
    }

    getUserInfo() {
        this._userInfo = {};
        this._userInfo.userName = this._userName.textContent;
        this._userInfo.userJob = this._userJob.textContent;
        return this._userInfo;
    }

    setUserInfo(data) {
        this._userName.textContent = data.name;
        this._userJob.textContent = data.job;
    }

}