const closeMenu = () => {
    $('.menu').hide()
    $('.content').show({duration: 400})
    $('.navbar').show({duration: 400})
}

const openMenu = () => {
    $('.menu').show({duration: 400})
    $('.content').hide()
    $('.navbar').hide()
}
