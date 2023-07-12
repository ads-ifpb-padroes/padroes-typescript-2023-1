interface Image {
  display(): void;
}

class RealImage implements Image {
  private filename: string;

  constructor(filename: string) {
    this.filename = filename;
    this.loadFromDisk();
  }

  private loadFromDisk(): void {
    console.log(`Loading image ${this.filename} from disk.`);
  }

  display(): void {
    console.log(`Displaying image ${this.filename}.`);
  }
}

class ImageProxy implements Image {
  private filename: string;
  private realImage: RealImage | null;

  constructor(filename: string) {
    this.filename = filename;
    this.realImage = null;
  }

  display(): void {
    if (this.realImage === null) {
      this.realImage = new RealImage(this.filename);
    }
    this.realImage.display();
  }
}

// Criando um objeto ImageProxy
const image: Image = new ImageProxy("image.jpg");

// Chamando o método display() no proxy
image.display();

// Saída:
// Loading image image.jpg from disk.
// Displaying image image.jpg.