class Animal {
  name: string; // name of the animal
  soundUrl: string; // url to the sound file
  hatUrl: string; // url to the hat image
  color: string; // color of the animal
  constructor(name: string, soundUrl: string, hatUrl: string, color: string) {
    this.name = name;
    this.soundUrl = soundUrl;
    this.hatUrl = hatUrl;
    this.color = color;
  }
}

export default Animal;
