import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import instagramIcon from '../../../../public/instagram150.png'
import linkedinIcon from '../../../../public/linkedin150.png'
import orcidIcon from '../../../../public/orcid150.png'
import { sendGAEvent } from '@next/third-parties/google'

interface PersonInfoProps {
  description: string
  name: string
  profileImgSrc: StaticImageData
  social: {
    instagram: string
    linkedin: string
    orcid?: string
  }
}

export const PersonInfo = ({
  description,
  name,
  profileImgSrc,
  social,
}: PersonInfoProps) => {
  const handleClickSocialIcon = (label: string) => {
    sendGAEvent('event', `click:social_icon:${label}_of_${name}`)
  }

  return (
    <div className='flex flex-col justify-center items-center gap-6 w-full'>
      <div className='w-[150px]'>
        <Image alt={name} src={profileImgSrc} className='rounded-full' />
      </div>

      <div className='w-full'>
        <p className='text-2xl sm:text-3xl text-center mb-2'>{name}</p>

        <p>{description}</p>
      </div>

      <div className='flex gap-4 mb-3'>
        <Link
          href={social.instagram}
          target='_blank'
          onClick={() => handleClickSocialIcon('instagram')}
        >
          <Image alt='Instagram' src={instagramIcon} width={25} height={25} />
        </Link>

        <Link
          href={social.linkedin}
          target='_blank'
          onClick={() => handleClickSocialIcon('linkedin')}
        >
          <Image alt='LinkedIn' src={linkedinIcon} width={25} height={25} />
        </Link>

        {social.orcid && (
          <Link
            href={social.orcid}
            target='_blank'
            onClick={() => handleClickSocialIcon('orcid')}
          >
            <Image alt='Orc ID' src={orcidIcon} width={25} height={25} />
          </Link>
        )}
      </div>
    </div>
  )
}
