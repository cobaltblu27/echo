import { AudioType, TODO } from './types'

class AudioDecoder {
  private rsAudioModule: any = undefined
  private loadPromise?: Promise<any> = undefined

  private static _singleTon?: AudioDecoder = undefined

  constructor() {
    if (AudioDecoder._singleTon != null) {
      return AudioDecoder._singleTon
    }
    this.loadModule()
  }

  private loadModule = () => {
    this.loadPromise = import('rust')
      .then(m => this.rsAudioModule = m)
  }

  public decode = async (file: File): Promise<Blob> => {
    const extension: string = file.name.split(".").pop()!
    if (
      !Object.values(AudioType)
        .map(t => t as string)
        .includes(extension)
    ) {
      throw Error(".mp3, .wav 파일만 사용 가능합니다")
    }
    const audioType = extension as AudioType

    if (this.rsAudioModule == null) {
      await this.loadPromise
    }

    switch (audioType) {
      case AudioType.MP3:
        return await this.rsAudioModule.decodeMp3(file as Blob)
      case AudioType.WAV:
        return await this.rsAudioModule.decodeWav(file as Blob)
    }
  }

  public async greet() {
    if (this.rsAudioModule == null) {
      await this.loadPromise
    }
    this.rsAudioModule.greet()
  }
}

export default AudioDecoder;