# Para aprender mais sobre como usar o Nix para configurar seu ambiente
# veja: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs }: {
  # Qual canal do nixpkgs utilizar.
  channel = "unstable"; # ou "unstable"

  # Use https://search.nixos.org/packages para encontrar pacotes
  packages = [
    pkgs.nodejs_24
  ];

  # Define variáveis de ambiente no workspace
  env = { };

  idx = {
    # Procure as extensões que você deseja em https://open-vsx.org/
    # e utilize "publisher.id"
    extensions = [
      # "vscodevim.vim"
      "google.gemini-cli-vscode-ide-companion"
      "Vue.volar"
      "Nuxtr.nuxtr-vscode"
      "dbaeumer.vscode-eslint"
      "bradlc.vscode-tailwindcss"
      "streetsidesoftware.code-spell-checker"
      "esbenp.prettier-vscode"
    ];

    workspace = {
      # Executa quando um workspace é criado pela primeira vez
      # usando este arquivo `dev.nix`
      onCreate = {
        npm-install = "npm ci --no-audit --prefer-offline --no-progress --timing";

        # Abre editores para os seguintes arquivos por padrão, caso existam:
        default.openFiles = [
          "app/app.vue"
        ];
      };

      # Para executar algo toda vez que o workspace for iniciado (ou reiniciado),
      # utilize o hook `onStart`
    };

    # Habilita previews e permite personalizar a configuração
    previews = {
      enable = true;

      previews = {
        web = {
          command = [ "npm" "run" "dev" "--" "--port" "$PORT" "--hostname" "0.0.0.0" ];
          manager = "web";
        };
      };
    };
  };
}
