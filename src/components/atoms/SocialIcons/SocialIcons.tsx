import Link from 'next/link'
import Image from 'next/image'
import githubIcon from '../../../../public/github150.png'
import instagramIcon from '../../../../public/instagram150.png'

const githubLink = 'https://github.com/cometsinthesky/noite-no-cerrado'
const instagramLink = 'https://www.instagram.com/noitenocerrado'

interface SocialIconsProps {
  size?: 'small' | 'large'
}

export const SocialIcons = ({ size }: SocialIconsProps) => {
  const isLarge = size === 'large'
  const isSmall = size === 'small'

  let width = 20
  let height = 20
  if (isLarge) {
    width = 40
    height = 40
  } else if (isSmall) {
    width = 15
    height = 15
  }

  return (
    <div className={`flex ${isLarge ? 'gap-10' : 'gap-4'} mt-1`}>
      <Link href={instagramLink} target='_blank'>
        <Image alt='Instagram' src={instagramIcon} width={width} height={height} />
      </Link>

      <Link href={githubLink} target='_blank'>
        <Image alt='Github' src={githubIcon} width={width} height={height} />
      </Link>
    </div>
  )
}
