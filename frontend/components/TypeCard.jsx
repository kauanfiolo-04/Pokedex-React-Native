import Image from 'next/image'
import { useRef } from 'react'

const colours= {
	normal: '#a9a8a8',
	fire: '#f99952',
	water: '#3b8ae7',
	electric: '#ffd526',
	grass: '#4fc508',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#a76bd7',
	ground: '#ed6635',
	flying: '#98a3ed',
	psychic: '#F95587',
	bug: '#84c518',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
}

const TypeInfo=({type})=>{
  const colour=colours[type] ?? '#777'
  const url=`/PokeTypesIcons/${type}.png`
  const Span=useRef<HTMLSpanElement>(null)

  return(
    <View className='px-1 flex items-center justify-between w-fit rounded-full h-auto cursor-default' style={{backgroundColor:colour}}
      onMouseOver={()=>{
        Span.current?.classList.toggle('hidden',false)
      }}

      onMouseLeave={()=>{
        Span.current?.classList.toggle('hidden',true)
      }}
    >
      <Image width={24} height={24} className='h-[16px] w-[16px] re1:h-[24px] re1:w-[24px] my-1' src={url} alt='poketype'/>
      <span ref={Span} className='mx-1 text-xs font-bold hidden text-white'>{type}</span>
    </View>
  )
}

export default TypeInfo