export function toggleAppSidebar() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const desktopSlideIn = window
            .getComputedStyle(document.documentElement)
            .getPropertyValue('--SideNavigation-desktopSlideIn')
        if (desktopSlideIn == '1') {
            document.body.style.removeProperty('overflow')
            document.documentElement.style.setProperty('--SideNavigation-desktopSlideIn', '0')
        } else {
            document.body.style.overflow = 'hidden'
            document.documentElement.style.setProperty('--SideNavigation-desktopSlideIn', '1')
        }
        const mobileSlideIn = window
            .getComputedStyle(document.documentElement)
            .getPropertyValue('--SideNavigation-mobileSlideIn')
        if (mobileSlideIn == '1') {
            document.body.style.removeProperty('overflow')
            document.documentElement.style.setProperty('--SideNavigation-mobileSlideIn', '0')
        } else {
            document.body.style.overflow = 'hidden'
            document.documentElement.style.setProperty('--SideNavigation-mobileSlideIn', '1')
        }
    }

}