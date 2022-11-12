import dogs from "/data.js"
import Dog from "/Dog.js"

let currentDog = getNewDog()

document.getElementById("like-btn").addEventListener("click", handleLikeBtn)
document
	.getElementById("dislike-btn")
	.addEventListener("click", handleDislikeBtn)

function handleLikeBtn() {
	currentDog.hasBeenLiked = true
	setBadge()
}

function handleDislikeBtn() {
	currentDog.hasBeenLiked = false
	setBadge()
}

function setBadge() {
	currentDog.hasBeenSwipped = true
	currentDog.setBadgeHtml()
	render()
	dogs.length > 0 ? renderNewDog() : endSwipe()
}

function getNewDog() {
	return new Dog(dogs.pop())
}

function renderNewDog() {
	setTimeout(() => {
		// debugger
		currentDog = getNewDog()
		render()
	}, 1300)
}

function endSwipe() {
	setTimeout(() => {
		document.getElementById("content").innerHTML =
			"<p class='end-swipe-message'>No more Dogs! Come back later for more ..."
		document.getElementById("footer").innerHTML = ""
	}, 1300)
}

function render() {
	document.getElementById("content").innerHTML = currentDog.getDogHtml()
}

render()
