import { View, Image, Text, StyleSheet } from 'react-native'

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

  return(
    <View  style={[styles.container, {backgroundColor:colour}]}>
      <Image width={24} height={24} style={styles.image} source={{uri:url}} alt='poketype'/>
      <Text style={styles.text}>{type}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4, // Equivalente a 'px-1' do Tailwind
    display: 'flex',
    flexDirection: 'row', // Padrão para 'flex', mas explicitamente para claridade
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 9999, // 'rounded-full'
    marginVertical: 2, // Aproximadamente 'my-1'
    backgroundColor: '#777', // Cor de fundo padrão
  },
  image: {
    height: 16, // Altura para 'h-[16px]' e 'w-[16px]'
    width: 16, // Largura para 'h-[16px]' e 'w-[16px]'
    margin: 4, // 'my-1' aplicado ao Image, considerando que 'm' aplica para todas as direções
  },
  text: {
    marginHorizontal: 4, // 'mx-1'
    fontSize: 12, // 'text-xs'
    fontWeight: 'bold', // 'font-bold'
    color: '#ffffff', // 'text-white'
  }
})

export default TypeInfo
