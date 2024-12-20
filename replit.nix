{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
    buildInputs = [
        pkgs.nodejs-20_x
        pkgs.nodePackages.typescript-language-server
        pkgs.yarn
        pkgs.nodePackages.jest
    ];
}