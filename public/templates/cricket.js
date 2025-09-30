const navbar = document.querySelector(".navbar")
document.getElementById('ham-icon').addEventListener('click', () => {
    if (navbar.style.display != 'flex') {
        navbar.style.display = 'flex';
    } else {
        navbar.style.display = 'none'
    }
})

document.getElementById('form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name").trim();
    const comment = formData.get("comment").trim();
    const addComment = document.getElementById('placed_comment')
    addComment.innerHTML += `
     <div class="Pcomment_contain">
                <div class="id">
                    <div class="image">
                        <img src="../images/user.png" alt="">
                    </div>
                    <div class="user-name">
                        <h1>${name}</h1>
                    </div>
                </div>
                <p>${comment}
                </p>
            </div>
    `;
})