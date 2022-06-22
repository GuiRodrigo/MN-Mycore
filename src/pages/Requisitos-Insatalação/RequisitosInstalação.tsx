import { Link } from "react-router-dom"

import { Menu } from "../../components/Menu";
import { Footer } from "../../components/footer";


export function RequisitosInstalação() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3><b>Requisitos de Instalação</b></h3>

                    <div>
                        <p>Para instalar o software da MyCore Tecnologias, use os sistema operacional Slackware 14.2 64 bits, em servidor com CPU quadcore (min 8 cpu), 8 GB Ram (min) e 100 GB HD (min). O .iso do Slackware pode ser encontrado no site da Mycore, em <Link to="http://dw.mycore.com.br" target="_blank" rel="noreferrer">dw.mycore.com.br</Link> ou clicando em <Link to="https://mirrors.slackware.com/slackware/slackware-iso/slackware64-14.2-iso/slackware64-14.2-install-dvd.iso" target="_blank" rel="noreferrer">Slackware 14.2 64 bits</Link>.</p>
                    </div>


                    <div>
                        <p>Os parâmetros mínimos de configuração aqui apresentados foram definidos para atender a um <b>número máximo de 500 clientes conectados ao provedor</b>.</p>
                    </div>

                    <div>
                        <p>Após a instalação do Sistema Operacional Slacware 64 bits o cliente deverá entrar em contato com a MyCore Tecnologia para a instalação, customização e licenciamento dos módulos do MyCore.</p>
                    </div>


                    <p><b>A seguir o passo a passo para instalação do Slackware 64 Bits.</b></p>

                    <div>
                        <p>Passo 01 - Chamada da instalação na linha de comando. Após o boot com o CD/DVD será exibida a tela de início do processo de instalação, na qual se deve pressionar <b>[ENTER]</b> para prosseguir.</p>
                        <img src="img/1.png" id="Instalação - Tela 01" alt="Instalação - Tela 01" className="shadow" />
                        <p>Passo 02 - Seleção do mapa do teclado. Pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/2.png" id="Instalação - Tela 02" alt="Instalação - Tela 02" className="shadow" />
                        <p>Passo 03 - Login no ambiente como <b>root.</b> Digite <b>root</b> e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/3.png" id="Instalação - Tela 03" alt="Instalação - Tela 03" className="shadow" />
                        <p>Passo 04 - Na linha de comando, digitar <b>cfdisk</b>, selecionar <b>gpt</b> e pressionar <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/4.png" id="Instalação - Tela 04" alt="Instalação - Tela 04" className="shadow" />
                        <p>Passo 05 - Mantenha a área <b>Free space</b> selecionada, escolha a opção <b>[New]</b> e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/5.png" id="Instalação - Tela 05" alt="Instalação - Tela 05" className="shadow" />
                        <p>Passo 06 - Na opção <b>Partition Size</b> digite <b>1Gb</b> para definir o tamanho do particição de <b>SWAP</b> e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/6.png" id="Instalação - Tela 06" alt="Instalação - Tela 06" className="shadow" />
                        <p>Passo 07 - Para definir o tipo de partição <b>Swap</b> mantenha a partição marcada e selecione a opção <b>[Type]</b> no menu e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/7.png" id="Instalação - Tela 07" alt="Instalação - Tela 07" className="shadow" />
                        <p>Passo 08 - Selecione <b>Linux Swap</b> dentre as opções para definir essa área na instalação e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/8.png" id="Instalação - Tela 08" alt="Instalação - Tela 08" className="shadow" />
                        <p>Passo 09 - Selecionar o restante da partição do disco <b>Free Space</b> e digitar o tamanho em <b>gigabytes</b> para a partição <b>principal</b>, onde o Slackware será instalado. Neste tela selecionar <b>[New]</b> e pressionar <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/9.png" id="Instalação - Tela 09" alt="Instalação - Tela 09" className="shadow" />
                        <p>Passo 10 - Em <b>Partition Size</b> digite o tamanho da partição <b>principal</b> e pressione <b>[Enter]</b> para prosseguir. A tela abaixo mostra apenas um exemplo, pois no caso de discos maiores a partição principal será proporcionalmente maior.</p>
                        <img src="img/10.png" id="Instalação - Tela 10" alt="Instalação - Tela 10" className="shadow" />
                        <p>Passo 11 - Para gravar as definições dos tipos de sistema de arquivos definidos selecione <b>[Write]</b> e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/11.png" id="Instalação - Tela 11" alt="Instalação - Tela 11" className="shadow" />
                        <p>Passo 12 - Para gravar as definições dos tipos de sistema de arquivos definidos digite <b>yes</b> e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/12.png" id="Instalação - Tela 12" alt="Instalação - Tela 12" className="shadow" />
                        <p>Passo 13 - Para sair do gerenciador de partições, selecione <b>[Quit]</b>  e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/13.png" id="Instalação - Tela 13" alt="Instalação - Tela 13" className="shadow" />
                        <p>Passo 14 - Para executar o programa de instalação do Slackware, digite <b>setup</b> na linha de comando e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/14.png" id="Instalação - Tela 14" alt="Instalação - Tela 14" className="shadow" />
                        <p>Passo 15 - Para prosseguir com a instalação, mantenha <b>ADDSWAP</b> e <b>OK</b> marcados e pressione <b>[Enter]</b>.</p>
                        <img src="img/15.png" id="Instalação - Tela 15" alt="Instalação - Tela 15" className="shadow" />
                        <p>Passo 16 - Para prosseguir com a formatação da partição de <b>Swap</b>, mantenha-a selecionada junto a opção <b>OK</b> e pressione <b>[Enter]</b>.</p>
                        <img src="img/16.png" id="Instalação - Tela 16" alt="Instalação - Tela 17" className="shadow" />
                        <p>Passo 17 - Para prosseguir com a instalação, deixe a opção <b>No</b> marcada e pressione <b>[Enter]</b>.</p>
                        <img src="img/17.png" id="Instalação - Tela 17" alt="Instalação - Tela 17" className="shadow" />
                        <p>Passo 18 - Para prosseguir com a instalação, pressione deixe a opção <b>OK</b> marcada e pressione <b>[Enter]</b>.</p>
                        <img src="img/18.png" id="Instalação - Tela 18" alt="Instalação - Tela 18" className="shadow" />
                        <p>Passo 19 - Mantenha selecionada a partição de instalação do Slackware, a opção <b>select</b> marcada e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/19.png" id="Instalação - Tela 19" alt="Instalação - Tela 19" className="shadow" />
                        <p>Passo 20 - Mantenha as opções <b>format</b> e <b>OK</b> marcadas e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/20.png" id="Instalação - Tela 20" alt="Instalação - Tela 20" className="shadow" />
                        <p>Passo 21 - Mantenha as opções <b>ext4</b> e <b>OK</b> marcadas e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/21.png" id="Instalação - Tela 21" alt="Instalação - Tela 21" className="shadow" />
                        <p><b>Aguarde até que a formatação seja realizada para prosseguir</b>.</p>
                        <img src="img/21-1.png" id="Instalação - Tela 21-1" alt="Instalação - Tela 21-1" className="shadow" />
                        <p>Passo 22 - Mantenha a opção <b>OK</b> marcada e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/22.png" id="Instalação - Tela 22" alt="Instalação - Tela 22" className="shadow" />
                        <p>Passo 23 - Mantenha as opções <b>1</b> e <b>OK</b> marcadas e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/23.png" id="Instalação - Tela 23" alt="Instalação - Tela 23" className="shadow" />
                        <p>Passo 24 - Mantenha as opções <b>auto</b> e <b>OK</b> marcadas e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/24.png" id="Instalação - Tela 24" alt="Instalação - Tela 24" className="shadow" />
                        <p>Passo 25 - Mantenha a opção <b>OK</b> marcada e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/25.png" id="Instalação - Tela 25" alt="Instalação - Tela 25" className="shadow" />
                        <p>Passo 26 - Mantenha as opções <b>full</b> e <b>OK</b> marcadas e pressione <b>[Enter]</b> para prosseguir. <b>Neste passo é necessário aguardar a instalação de todos os pacotes do Slackware para prosseguir</b>.</p>
                        <img src="img/26.png" id="Instalação - Tela 26" alt="Instalação - Tela 26" className="shadow" />
                        <p>Passo 27 - Mantenha as opções <b>skip</b> e <b>OK</b> marcadas e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/27.png" id="Instalação - Tela 27" alt="Instalação - Tela 27" className="view_images shadow" />
                        <p>Passo 28 - Mantenha as opções <b>simple</b> e <b>OK</b> marcadas e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/29.png" id="Instalação - Tela 29" alt="Instalação - Tela 29" className="shadow" />
                        <p>Passo 29 - Mantenha as opções <b>standard</b> e <b>OK</b> marcadas e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/30.png" id="Instalação - Tela 30" alt="Instalação - Tela 30" className="shadow" />
                        <p>Passo 30 - Mantenha a opção <b>OK</b> marcada e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/31.png" id="Instalação - Tela 31" alt="Instalação - Tela 31" className="shadow" />
                        <p>Passo 31 - Mantenha a opção <b>No</b> marcada e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/32.png" id="Instalação - Tela 32" alt="Instalação - Tela 32" className="shadow" />
                        <p>Passo 32 - Mantenha as opções <b>MBR</b> e <b>OK</b> marcadas e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/33.png" id="Instalação - Tela 33" alt="Instalação - Tela 33" className="shadow" />
                        <p>Passo 33 - Mantenha as opções <b>imps2</b> e <b>OK</b> marcadas e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/34.png" id="Instalação - Tela 34" alt="Instalação - Tela 34" className="shadow" />
                        <p>Passo 34 - Mantenha a opção <b>Yes</b> marcada e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/35.png" id="Instalação - Tela 35" alt="Instalação - Tela 35" className="shadow" />
                        <p>Passo 35 - Mantenha a opção <b>Yes</b> marcada e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/36.png" id="Instalação - Tela 36" alt="Instalação - Tela 36" className="shadow" />
                        <p>Passo 36 - Digite o nome do seu servidor, por exemplo, <b>admin</b>, mantenha a opção <b>OK</b> marcada e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/37.png" id="Instalação - Tela 37" alt="Instalação - Tela 37" className="shadow" />
                        <p>Passo 37 - Digite o nome do seu dominio, por exemplo, <b>mycore.com.br</b>, mantenha a opção <b>OK</b> marcada e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/38.png" id="Instalação - Tela 38" alt="Instalação - Tela 38" className="shadow" />
                        <p>Passo 38 - Mantenha as opções <b>static IP</b> e <b>OK</b> marcadas e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/39.png" id="Instalação - Tela 39" alt="Instalação - Tela 39" className="shadow" />
                        <p>Passo 39 - Digite o <b>IP estático</b> do seu servidor, por exemplo, 10.0.0.120, mantenha a opção <b>OK</b> marcada e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/40.png" id="Instalação - Tela 40" alt="Instalação - Tela 40" className="shadow" />
                        <p>Passo 40 - Digite a <b>máscara</b> para o endereço IP, por exemplo, 255.255.255.0, mantenha a opção <b>OK</b> marcada e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/41.png" id="Instalação - Tela 41" alt="Instalação - Tela 41" className="shadow" />
                        <p>Passo 41 - Digite o <b>IP do Gateway</b> da sua rede, por exemplo, 10.0.0.1, mantenha a opção <b>OK</b> marcada e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/42.png" id="Instalação - Tela 42" alt="Instalação - Tela 42" className="shadow" />
                        <p>Passo 42 - Mantenha a opção <b>Yes</b> marcada e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/43.png" id="Instalação - Tela 43" alt="Instalação - Tela 43" className="shadow" />
                        <p>Passo 43 - Digite o <b>DNS [Domain id Server]</b> da rede, por exemplo, 8.8.8.8, mantenha a opção <b>OK</b> marcada e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/44.png" id="Instalação - Tela 44" alt="Instalação - Tela 44" className="shadow" />
                        <p>Passo 44 - Confirme a configuração da sua rede na tela, mantenha a opção <b>Accept</b> marcada e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/45.png" id="Instalação - Tela 45" alt="Instalação - Tela 45" className="shadow" />
                        <p>Passo 45 - Marque os serviços que serão iniciados junto com o Slackware, conforme abaixo, mantenha a opção <b>OK</b> marcada e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/46.png" id="Instalação - Tela 46" alt="Instalação - Tela 46" className="shadow" />
                        <p>Passo 46 - Mantenha a opção <b>No</b> marcada e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/47.png" id="Instalação - Tela 47" alt="Instalação - Tela 47" className="shadow" />
                        <p>Passo 47 - Mantenha as opções <b>NO</b> e <b>OK</b> marcadas e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/48.png" id="Instalação - Tela 48" alt="Instalação - Tela 48" className="shadow" />
                        <p>Passo 48 - Selecione as opções <b>America/Sao_paulo</b> e <b>OK</b> marcadas e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/49.png" id="Instalação - Tela 49" alt="Instalação - Tela 49" className="shadow" />
                        <p>Passo 49 - Mantenha as opções <b>xinitrc.kde</b> e <b>OK</b> marcadas e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/50.png" id="Instalação - Tela 50" alt="Instalação - Tela 50" className="shadow" />
                        <p>Passo 50 - Mantenha a opção <b>Yes</b> marcada e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/51.png" id="Instalação - Tela 51" alt="Instalação - Tela 51" className="shadow" />
                        <p>Passo 51 - Mantenha a opção <b>Yes</b> marcada, pressione <b>[Enter]</b>, digite sua <b>senha</b> e confirme sua senha para prosseguir.</p>
                        <img src="img/52.png" id="Instalação - Tela 52" alt="Instalação - Tela 52" className="shadow" />
                        <p>Passo 52 - A instalação está completa ! Mantenha a opção <b>OK</b> marcada e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/53.png" id="Instalação - Tela 53" alt="Instalação - Tela 53" className="shadow" />
                        <p>Passo 53 - Selecione as opções <b>EXIT</b> e <b>OK</b> para sair do programa de instalação.</p>
                        <img src="img/54.png" id="Instalação - Tela 54" alt="Instalação - Tela 54" className="shadow" />
                        <p>Passo 54 - Retire o CD/DVD da gaveta, mantenha a opção <b>OK</b> selecionda e pressione <b>[Enter]</b> para prosseguir.</p>
                        <img src="img/55.png" id="Instalação - Tela 54" alt="Instalação - Tela 54" className="shadow" />
                        <p>Passo 55 - Mantenha a opção <b>Yes</b> selecionda e pressione <b>[Enter]</b> para finalizar. Neste passo o servidor será automaticamente reiniciado e apresentará a linha de comando para entrada no Slackware.</p>
                        <img src="img/56.png" id="Instalação - Tela 54" alt="Instalação - Tela 54" className="shadow" />
                    </div>

                    <div>
                        <p><b>Atenção !!</b> Para liberar o acesso root no Slackware, execute as três ações a seguir:</p>
                        <p>mcedit /etc/ssh/sshd_config (vai abrir uma tela com a cor de fundo azul). Altere a linha 45, conforme a seguir (o caracter # deve ser retirado também):</p>
                        <p>Altere de  <b>#PermitRootLogin prohibit-password</b> para <b >PermitRootLogin yes</b></p>
                        <p>/etc/rc.d/rc.sshd stop  /etc/rc.d/rc.sshd start</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}