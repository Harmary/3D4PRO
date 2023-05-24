import JSZip from "jszip";
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';


export class AddNewModelValidator {
    /**
     * addNewModel
     */
    public async addNewModel(file: File) {
        const zip = new JSZip();

        return await zip.loadAsync(file).then((zip) => {
            const sourceFolder = zip.folder('source');
            if (!sourceFolder) {
                throw new Error('Source folder not found');
            }
            const objFile = Object.values(sourceFolder.files).find((file) => file.name.endsWith('.obj'));
            if (!objFile) {
                throw new Error('Model file not found');
            }
            return objFile.async('string').then((objText) => {
                const loader = new OBJLoader();
                const model = loader.parse(objText);
                let polygonCount = 0;
                model.traverse((child) => {
                    if (child instanceof THREE.Mesh) {
                        polygonCount += child.geometry.attributes.position.count / 3
                    }
                });
                return polygonCount;
            });
        });
    }
}