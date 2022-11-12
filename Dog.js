class Dog {
	constructor(data) {
		Object.assign(this, data)
		this.BadgeHtml = ""
	}
	setBadgeHtml() {
		this.hasBeenSwiped = true
		this.BadgeHtml = this.hasBeenLiked
			? `<img src="/images/badge-like.png" class="badge" />`
			: `<img src="/images/badge-nope.png" class="badge" />`
	}
	getDogHtml() {
		const { name, avatar, age, bio, BadgeHtml } = this
		return `
            ${BadgeHtml}
            <img src="/${avatar}" class="dog-avatar" />
            <div class="dog-info">
                <span class="dog-name">${name}</span>,
                <span class="dog-age">${age}</span><br />
                <span class="dog-bio">${bio}</span>
            </div>
        `
	}
}

export default Dog
