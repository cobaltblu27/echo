import { AudioType, TODO } from './types';

export const decodeAudio = async (file: File): Promise<Blob> => {
  const extension: string = file.name.split(".").pop()!;
  if (
    !Object.values(AudioType)
      .map(t => t as string)
      .includes(extension)
  ) {
    throw Error(".mp3, .wav 파일만 사용 가능합니다");
  }
  const audioType = extension as AudioType

  switch (audioType) {
    case AudioType.MP3:
      return await decodeMp3(file as Blob)
    case AudioType.WAV:
      return await decodeWav(file as Blob)
  }
}

const decodeMp3 = async (blob: Blob): Promise<Blob> => {
  return TODO()
}

const decodeWav = async (blob: Blob): Promise<Blob> => {
  return TODO()
}