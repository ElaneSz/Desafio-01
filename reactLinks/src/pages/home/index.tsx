import { Social } from '../../components/Social'
import { useEffect, useState } from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { db } from '../../services/firebaseConnection'
import {
  getDocs,
  collection,
  orderBy,
  query,
  doc,
  getDoc,
  snapshotEqual
} from 'firebase/firestore'

interface LinksProps {
  id: String,
  name: String,
  url: String,
  bg: String,
  color: String,
}

interface socialLinksProp {
  facebook: string;
  youtube: string;
  instagram: string;
}

export function Home(){
  const [ links, setLinks ] = useState<LinkProps[]>
  const [ socialLinks, setSocialLinks ] = useState<socialLinksProp>()

  useEffect (() => {
    function carregarLinks () {
      const linkRef = collection(db, "links")
      const queryRef = query(links, orderBy("created", "asc"))

      getDocs(queryRef)
      .then((snapshot) => {
        let lista = [] as LinksProps[];
        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            name: doc.data().name,
            url: doc.data().url,
            bg: doc.data().bg,
            color: doc.data().color
          })
        })
        setLinks(lista);
      })
    }
    carregarLinks();
  }, [])

  useEffect(() => {
    function carregarSocialLinks () {
      const docRef = doc(db, "Social", "Links")
      getDoc(docRef)
      .then((snapshot) => {
        if(snapshot.data() != undefined) {
          setSocialLinks({
            facebook: snapshot.data()?.facebook,
            instagram: snapshot.data()?.instagram,
            youtube: snapshot.data() ?. youtube,
          })
        }
      })
    }
  })

  return(
    <div className="flex flex-col w-full py-4 items-center justify-center">
      <h1 className="md:text-4xl  text-3xl font-bold text-white mt-20">Instituto Federal Catarinense</h1>
      <span className="text-whi mb-5 mt-3">Veja meus links 👇</span>
      

      <main className="flex flex-col w-11/12 max-w-xl text-center">
        {links.map((link) => (
          <section 
          style={{background: link.bg}}
          key={link.id}
          className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer">
            <a href={link.url} target='_blank'>
              <p className="text-base md:text-lg" style={{color: link.color}} >
                {link.name}
              </p>
            </a>
          </section>
        ))}

        {socialLinks && Object.keys(socialLinks).length > 0 && (
          <footer className="flex justify-center gap-3 my-4">
            <Social url={socialLinks?.facebook}>
              <FaFacebook size={35} color="#FFF" />
            </Social>

            <Social url={socialLinks?.youtube}>
              <FaYoutube size={35} color="#FFF" />
            </Social>

            <Social url={socialLinks?.instagram}>
              <FaInstagram size={35} color="#FFF" />
            </Social>
          </footer>
        )}

      </main>

    </div>
  )
}