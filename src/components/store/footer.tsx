import Link from 'next/link'
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const sections = [
    {
      title: 'Explore',
      links: [
        { name: 'Market', href: '/market' },
        { name: 'Deli', href: '/deli' },
        { name: 'Menú', href: '/menu' },
        { name: 'Repostería', href: '/bakery' },
        { name: 'Vinos & Licores', href: '/wine' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'FAQ', href: '/faq' },
        { name: 'Envíos & Devoluciones', href: '/shipping' },
        { name: 'Términos de Servicio', href: '/terms' },
        { name: 'Política de Privacidad', href: '/privacy' },
        { name: 'Contacto', href: '/contact' },
      ],
    },
    {
      title: 'Community',
      links: [
        { name: 'Brands We Love', href: '/brands' },
        { name: 'Our Story', href: '/about' },
        { name: 'Sustainability', href: '/sustainability' },
        { name: 'Recipes', href: '/recipes' },
      ],
    },
  ]

  return (
    <footer className="bg-casita-cream border-t border-black/5 pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-serif font-bold mb-6">La Casita Deli</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-sm">
              Seleccionamos lo mejor del mundo para tu mesa. Desde quesos artesanales hasta
              vinos exclusivos, cada producto en La Casita cuenta una historia de sabor y tradición.
            </p>
            <div className="flex flex-col gap-4">
               <div className="flex items-center gap-3 text-sm text-casita-charcoal">
                  <MapPin className="h-4 w-4 text-casita-terracotta" />
                  <span>Av. Principal 123, Ciudad de México</span>
               </div>
               <div className="flex items-center gap-3 text-sm text-casita-charcoal">
                  <Phone className="h-4 w-4 text-casita-terracotta" />
                  <span>+52 55 1234 5678</span>
               </div>
               <div className="flex items-center gap-3 text-sm text-casita-charcoal">
                  <Mail className="h-4 w-4 text-casita-terracotta" />
                  <span>hola@lacasitadeli.com</span>
               </div>
            </div>
          </div>

          {/* Links Columns */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-casita-charcoal mb-6">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-casita-terracotta transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-black/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs text-muted-foreground font-medium">
            © {currentYear} La Casita Delicatessen. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="https://instagram.com" className="hover:text-casita-terracotta transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://facebook.com" className="hover:text-casita-terracotta transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="https://twitter.com" className="hover:text-casita-terracotta transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
