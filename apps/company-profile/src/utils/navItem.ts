export const navItems = [
    {
      href: '/',
      label: 'Beranda',
    },
    {
      href: '/program',
      label: 'Program',
    },
    {
      href: '/gallery',
      label: 'Galeri',
    },
    {
      href: null,
      label: 'Tentang Kami',
      items: [
        {
          href: "/about",
          label: "Tentang Kami"
        },
        {
          href: "/about/director",
          label: "Direktur"
        },
        {
          href: "/",
          label: "Partner Industri"
        },
      ]
    },
    {
      href: null,
      label: 'Hubungi Kami',
      items: [
        {
          href: "/",
          label: "Tes 1"
        },
        {
          href: "/",
          label: "Tes 2"
        },
        {
          href: "/",
          label: "Tes 3"
        },
      ]
    }
  ] as unknown as ({
    href: string | null,
    label: string,
    items?: {
      href: string,
      label: string
    }[]
  }[])