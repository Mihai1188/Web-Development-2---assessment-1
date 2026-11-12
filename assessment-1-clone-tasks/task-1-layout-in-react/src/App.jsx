
import './App.css'

// Images supplied with the university assessment.
const asset = (filename) => `/assets/${filename}`

const navigation = [
  { label: 'Our Blog', href: '#blog' },
  { label: 'Our Artists', href: '#artists' },
  { label: 'Our Story', href: '#story' },
]

const albums = [
  { filename: 'all-encores.jpg', title: 'All Encores' },
  { filename: 'encores-2.jpg', title: 'Encores 2' },
  { filename: 'eulogy-for-evolution.jpg', title: 'Eulogy for Evolution' },
  { filename: 'the-cell.jpg', title: 'The Cell' },
  { filename: 'articulation.jpg', title: 'Articulation' },
]

const socialLinks = [
  {
    name: 'Facebook',
    filename: 'facebook-icon.png',
    url: 'https://www.facebook.com/',
  },
  {
    name: 'Instagram',
    filename: 'instagram-icon.svg',
    url: 'https://www.instagram.com/',
  },
  {
    name: 'Twitter',
    filename: 'twitter-icon.svg',
    url: 'https://x.com/',
  },
]

// Reusable navigation component.
function Navigation() {
  return (
    <nav className="navigation" aria-label="Main navigation">
      {navigation.map((item) => (
        <a key={item.label} href={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  )
}

// AI assistance: React component structure and JSX layout
// developed with ChatGPT (OpenAI, 2026).
function Header() {
  return (
    <header className="site-header">
      <a href="#blog" aria-label="Erased Tapes home">
        <img
          className="logo"
          src={asset('logo.svg')}
          alt="Erased Tapes Records logo"
        />
      </a>
      <Navigation />
    </header>
  )
}

function SocialIcons() {
  return (
    <div className="social-icons">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
        >
          <img src={asset(social.filename)} alt={social.name} />
        </a>
      ))}
    </div>
  )
}

function Article() {
  return (
    <article id="blog" className="article">
      <h1>Erased Tapes:</h1>
      <h2 className="subtitle">Exploring the Sonic Frontier</h2>

      <p className="introduction">
        Lorem ipsum odor amet, consectetuer adipiscing elit. Mi eu
        scelerisque turpis posuere tempor? Leo condimentum himenaeos
        molestie elit; maximus iaculis proin nulla. Ullamcorper nibh
        cras conubia suscipit dapibus sagittis, facilisi habitant
        vivamus. Etiam fusce posuere himenaeos ipsum commodo
        sollicitudin himenaeos nec.
      </p>

      <div className="article-columns">
        <section>
          <h2>Heading</h2>
          <p>
            Montes ridiculus mus tellus nunc vulputate. Cras facilisi
            congue et facilisis porttitor litora etiam praesent
            porttitor. Sollicitudin cubilia scelerisque diam taciti
            lacus. Dapibus penatibus augue dapibus sagittis; rhoncus
            accumsan. Accumsan urna et, ultrices placerat justo
            rutrum. Tristique mattis ante cras accumsan convallis
            phasellus fermentum magna. Rhoncus curabitur pharetra
            proin ante nam adipiscing accumsan hac. Rutrum efficitur
            nullam integer ut ex id. Pulvinar vel at vestibulum
            vivamus sed nascetur eget.
          </p>
          <p>
            Laoreet volutpat hendrerit est aliquam; fusce quam tempor.
            Nisi interdum praesent pellentesque non non blandit
            cubilia et. Aptent maximus vehicula nullam odio tempor.
            Placerat dis facilisis potenti iaculis, primis vivamus
            nec at magnis. Aadipiscing curabitur vestibulum imperdiet
            dolor primis. Inceptos penatibus inceptos eu habitasse
            aptent vehicula platea litora congue. Ultricies mauris
            fringilla rhoncus pharetra iaculis vitae. Venenatis
            himenaeos eget molestie dignissim consectetur tellus
            litora. Porta a iaculis mi primis rhoncus.
          </p>
          <p>
            Curae habitasse elementum amet nunc, natoque at. Tortor
            vel blandit sociosqu auctor aliquam maximus porta
            feugiat. Eros phasellus platea mauris condimentum natoque
            hendrerit tellus id. Ex imperdiet vitae maximus
            adipiscing neque quam tempor orci. Lobortis porta
            lacinia cubilia tellus vel placerat; facilisis mi
            euismod. Neque eu orci nulla penatibus elit nec.
          </p>
          <p>
            Parturient habitasse facilisis purus donec, enim platea
            maximus. Primis class varius augue sed class ultricies.
            Posuere curabitur tristique penatibus montes hac ac
            imperdiet. Risus per sociosqu, cursus leo condimentum
            ac fringilla. Nibh curabitur eros tempus nec; nam curae
            hendrerit. Mattis placerat maximus mollis praesent,
            eros adipiscing dui.
          </p>
        </section>

        <section>
          <h2>Heading</h2>
          <p>
            Habitasse ornare fames facilisis montes pulvinar habitasse
            fringilla. Risus porta cursus duis vivamus quam adipiscing
            nec. Ante at posuere eget aptent natoque vivamus ante.
            Aenean enim dapibus viverra sem efficitur. Felis nam
            semper integer justo in. Facilisi augue urna torquent
            lacinia facilisi inceptos. Natoque varius feugiat massa
            scelerisque natoque, cras tempor inceptos.
          </p>
          <p>
            Amet ac leo, imperdiet hac litora auctor. Suscipit congue
            duis sociosqu auctor euismod vivamus urna diam. Nunc
            enim himenaeos litora facilisi, tincidunt torquent.
            Eros sapien laoreet duis, volutpat rutrum pulvinar.
            Natoque semper sapien aptent quis habitant aliquam
            condimentum luctus. Tempus pellentesque congue varius
            dapibus pharetra. Fermentum diam auctor bibendum rhoncus
            leo. Vestibulum tincidunt fames convallis ligula semper
            porttitor.
          </p>
          <p>
            Magnis maximus morbi, litora accumsan vivamus facilisi
            etiam pharetra. Platea congue orci sagittis purus
            scelerisque. Velit taciti maecenas praesent nam lobortis
            metus vehicula habitasse porttitor. Porta gravida
            placerat lobortis litora elit feugiat venenatis. Cras
            magna himenaeos consequat aliquet ad nec pharetra.
            Ligula eleifend imperdiet aptent primis placerat.
            Nec magnis tempus vulputate ipsum ad sagittis mus.
          </p>
        </section>

        <section>
          <h2>Heading</h2>
          <p>
            Vulputate nullam tempus montes eu tellus integer
            adipiscing pulvinar. Pharetra eu luctus id a potenti.
            Pulvinar egestas conubia ante varius lobortis iaculis
            metus. Netus sem imperdiet hendrerit vehicula netus est
            gravida tortor. Nunc ridiculus per montes nulla,
            facilisis lacinia per leo. Hendrerit scelerisque nulla
            in suspendisse sit tortor sagittis. Suscipit dictumst
            ipsum laoreet cras egestas suscipit orci. Per molestie
            felis erat platea blandit commodo.
          </p>
          <p>
            Ad venenatis sapien habitant posuere donec porttitor vel
            nisi. Sodales laoreet donec diam rhoncus lectus euismod
            orci torquent curae. Fames rhoncus torquent sed convallis;
            potenti cras. Dictumst arcu libero nulla malesuada mi
            ridiculus platea. Interdum ullamcorper fringilla
            himenaeos mollis; in arcu pharetra massa. Nunc mauris
            taciti montes sapien molestie orci ac quis.
          </p>
        </section>
      </div>
    </article>
  )
}

// AI assistance: CSS Grid album arrangement and mapping
// images from an array (ChatGPT, OpenAI, 2026).
function AlbumGallery() {
  return (
    <section id="artists" className="album-gallery" aria-label="Album artwork">
      {albums.map((album, index) => (
        <img
          key={album.filename}
          src={asset(album.filename)}
          alt={album.title}
          className={index === 0 ? 'featured-album' : 'album'}
        />
      ))}
    </section>
  )
}

function Author() {
  return (
    <section id="story" className="author-section">
      <div className="author-description">
        <h2>The Author</h2>
        <p>
          Sapien leo scelerisque per convallis torquent nunc.
          Lobortis eleifend a nam sit turpis nostra. Tempus
          suspendisse libero curae faucibus lobortis litora
          bibendum praesent! Eget quam magna, diam commodo
          interdum sapien magnis.
        </p>
      </div>
      <img
        className="author-photo"
        src={asset('profile_picture.jpg')}
        alt="Portrait of the article author"
      />
      <SocialIcons />
    </section>
  )
}

const comments = [
  {
    username: 'soundseeker92',
    message:
      "This article beautifully captures the essence of experimental sound. Erased Tapes is truly pushing boundaries. Makes me want to revisit Nils Frahm's early work. I wonder what you think about their older stuff?",
  },
  {
    username: 'Ted Baker',
    message:
      "I've been following the label for years—so glad someone's finally writing about their impact.",
  },
  {
    username: 'Queen_of_noise',
    message:
      'I discovered Erased Tapes through Ólafur Arnalds—this article brought back memories and be and my friends listening together. A bit too poetic for my taste, but still compelling.',
  },
]

function Comments() {
  return (
    <section className="comments">
      <h2>Comments</h2>
      {comments.map((comment) => (
        <div className="comment" key={comment.username}>
          <h3>{comment.username}</h3>
          <p>{comment.message}</p>
        </div>
      ))}
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <Navigation />
      <p>Copyright © 2023 Erased Disks Ltd.</p>
      <SocialIcons />
    </footer>
  )
}

function App() {
  return (
    <>
      <Header />
      <main className="page-content">
        <Article />
        <AlbumGallery />
        <Author />
        <Comments />
      </main>
      <Footer />
    </>
  )
}

export default App
