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
      href: '#',
      label: 'Tentang Kami',
      items: [
        {
          href: "/",
          label: "Tentang Kami"
        },
        {
          href: "/",
          label: "Instruktur"
        },
        {
          href: "/",
          label: "Direktur"
        },
      ]
    },
    {
      href: '/contact',
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
    href: string,
    label: string,
    items?: {
      href: string,
      label: string
    }[]
  }[])