export const reveal = () => {
    let revealElements = document.querySelectorAll('.reveal');
    const reveals = [...revealElements];

    reveals.map(reveal => {
        let windowheight = window.innerHeight;
        let revealtop = reveal.getBoundingClientRect().top;
        let revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveal.classList.add('active');
        } else{
            reveal.classList.remove('active');
        }
    })

}
