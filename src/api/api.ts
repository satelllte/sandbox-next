import { sleep } from '@/utils/promise'
import { randInt } from '@/utils/rand'
import { resolvePlaceholderUrl } from './placeholder/index'

export interface ImageWithSize {
	src: string
	width: number
	height: number
}

export const fetchImagesWithSizes = async(count: number): Promise<ImageWithSize[]> => {
	await sleep(randInt(400, 700))

	const images: ImageWithSize[] = (new Array(count)).fill(null).map(() => {
		const width = randInt(200, 700)
		const height = randInt(200, 900)
		const color = Math.floor(Math.random() * 16777215).toString(16)
		return {
			src: resolvePlaceholderUrl(width, height, color),
			width,
			height,
		}
	})

	return images
}

export const fetchImages = async(count: number): Promise<string[]> => {
	return (await fetchImagesWithSizes(count)).map(({ src }) => src)
}
