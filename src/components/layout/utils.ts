export function toggleNavBar() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const mobileSlideIn = window
            .getComputedStyle(document.documentElement)
            .getPropertyValue('--NavBar-mobileSlideIn')
        if (mobileSlideIn == '1') {
            document.body.style.removeProperty('overflow')
            document.documentElement.style.setProperty('--NavBar-mobileSlideIn', '0')
        } else {
            document.body.style.overflow = 'hidden'
            document.documentElement.style.setProperty('--NavBar-mobileSlideIn', '1')
        }
    }

}