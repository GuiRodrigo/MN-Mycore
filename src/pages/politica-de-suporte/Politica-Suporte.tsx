import { Link } from "react-router-dom"

import { Footer } from "../../components/footer"
import { Menu } from "../../components/Menu"

import TableSLA from './images/TableSla.png'


export function PoliticaSuporte() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3 >Política de Serviços e Suportes MyCore</h3>

                    <h4><b>Introdução à Politica de Suporte</b></h4>
                    <div>
                        <p>A MyCore Tecnologias mantém seu compromisso de qualidade nos atendimentos de suportes e treinamentos, colaborando com a continuidade operacional de nossos CONTRATANTES de forma personalizada, registrando todas as ações e comunicações, dentro do tempo de atendimento e padrões definidos no “Termo de Uso e Contrato de Licença” e em nossa “Política de Suporte”.</p>
                    </div>


                    <h4><b>Elegibilidade ao Suporte</b></h4>
                    <div>
                        <p>O suporte técnico é disponível para todos os CONTRATANTES que utilizam o Sistema MyCore para Gestão de ISP.</p>
                    </div>


                    <h4><b>Natureza do Suporte</b></h4>
                    <div>
                        <p>a) Da natureza dos serviços:</p>


                        <ul >
                            <li>Instalação do Sistema</li>
                            <li>Suporte ao uso do Sistema</li>
                            <li>Reparações de danos ao Sistema</li>
                        </ul>


                        <p>b) Os serviços serão realizados por profissionais habilitados, online (remotamente) ou in loco.</p>

                        <p>c) A CONTRATADA é responsável pela manutenção do Sistema MyCore, excluindo dessa responsabilidade a configuração de outros sistemas ou equipamentos, migrações de base de dados e agregação de base de dados ao banco de dados do sistema. A execução de tais serviços se necessários poderão ser efetuadas mediante a avaliação da CONTRATADA e orçadas para prévia aprovação pelo CONTRATANTE em faturamento à parte.</p>

                        <p>d) O suporte técnico inclui:</p>

                        <ul >
                            <li>Suporte por Telefone</li>
                            <li>Suporte por e-mail</li>
                            <li>Material e Guia do Usuário disponível em: <Link to="http://wiki.mycore.com.br" target="_blank">wiki.mycore.com.br</Link>, <Link to="http://manual.mycore.com.br" target="_blank">manual.mycore.com.br</Link> e <Link to="http://help.mycore.com.br" target="_blank">help.mycore.com.br</Link></li>
                        </ul>
                    </div>


                    <h4><b>Acesso Remoto</b></h4>
                    <div>
                        <p>É obrigação do CONTRATANTE permitir o acesso direto ao software ou de maneira facilitada (redirecionamento de porta, dmz ou VPN de protocolo publico, visto que TeamViewer e outros aplicativos privados oneram custos).</p>
                    </div>


                    <h4><b>Custo do Suporte</b></h4>
                    <div>
                        <p>Para a maioria dos produtos e soluções, não há custo adicional para o suporte técnico. O suporte do nosso software é considerado uma parte do contrato de licenciamento.</p>


                        <p>No caso de necessidade de algum dos seguintes serviços, sua solicitação será redirecionada para um recurso remunerado adequado.</p>

                        <ul >
                            <li> Escrever código personalizado</li>
                            <li> Projetar um aplicativo</li>
                            <li> Selecionar uma metodologia estatística apropriada</li>
                            <li> Realizar correção de Banco de Dados</li>
                            <li> Migrações de base de dados e agregação de base de dados ao banco de dados do sistema</li>
                            <li> Demanda de suporte em horário não comercial, para itens que não afetam a conectividade do cliente final do CONTRATANTE</li>
                        </ul>
                    </div>


                    <h4><b>Horários de Atendimento</b></h4>
                    <div>
                        <p>O suporte ao sistema é oferecido na sede da CONTRATADA, através de consultas técnicas (chamados). O atendimento será realizado no horário das 09:00 às 17:00hs (horário de Brasília), exceto nos feriados nacionais ou municipais na sede da CONTRATADA.</p>
                    </div>
                    <h4><b>Tempo de Resposta e Tabela de SLA</b></h4>
                    <div>
                        <p>A prioridade dos incidentes relatados pelo telefone ou e-mail são definidos com base nas diretrizes abaixo.Todos os problemas relatados eletronicamente recebem um protocolo atribuído ao chamado.Esse número acompanhará todos os passos ou trâmites do chamado até a sua finalização.A qualquer tempo o andamento desse chamado poderá ser consultado em um de nossos canais de atendimento.</p>

                        <p>Na sequência da confirmação, os chamados são direcionados para a equipe responsável pelo atendimento (Help Desk).Essa equipe qualifica o incidente e faz o contato com o CONTRATANTE solicitante para levantar os detalhes e para solucionar o incidente ainda na primeira ligação.Se a equipe de Help Desk não dispor de recursos para a solução do incidente no primeiro contato, ou se o incidente tiver características peculiares, procederá o encaminhamento do mesmo para a equipe de especialistas (Service Desk).</p>

                        <p>A tabela a seguir mostra as metas de acompanhamento inicial e Previsão de Atendimentos para problemas com diferentes severidades e condições.O Suporte Técnico tentará entrar em contato com o CONTRATANTE que relatou o problema dentro das metas de tempo de resposta descritas abaixo.</p>

                        <img src={TableSLA} className="" alt="Faturas a Vencer - Menu" />
                    </div>
                    <h4><b>Resolução de Problemas</b></h4>
                    <div>
                        <p>Devido à natureza complexa do desenvolvimento de software e sistemas operacionais, o Sistema MyCore não pode garantir o tempo necessário para resolver um problema, pois, os tempos de resposta podem ser afetados caso o CONTRATANTE não consiga ou recuse enviar informações solicitadas ou não aceite permitir acesso remoto à rede ou servidores relevantes, quando necessário.Por esse motivo é importante entender que para resolver um problema rapidamente e de forma assertiva, é fundamental garantir que todas as informações necessárias para analisar o problema já foram enviadas de forma clara e completa para o Suporte Técnico da MyCore.</p>
                    </div>


                    <h4><b>Disposições Gerais</b></h4>
                    <div>
                        <p>O suporte técnico fornecido ao CONTRATANTE limita-se à esclarecimentos técnicos sobre o sistema e a resoluções de problemas do Sistema.Assim, pressupõe-se o necessário conhecimento em informática por parte do usuário, o que inclui o uso do computador e suas funções, o uso do sistema operacional sob o qual o sistema irá trabalhar, bem como o pleno domínio da área de conhecimento que o sistema se propõe a operar.</p>

                        <p>Não está incluso no serviço de suporte: </p>

                        <ul >
                            <li>Orientações específicas sobre a área de conhecimento a que se refere o sistema, tais como procedimentos, rotinas, cálculos, legislação, regras, normas ou qualquer outro assunto não estritamente relacionado ao sistema.</li>
                            <li>Orientações sobre o download, uso, instalação, operação e desinstalação de programas validadores fornecidos por órgãos do Governo Federal, Estadual ou Municipal.</li>
                            <li>Orientações técnicas sobre informática, tais como a instalação e configuração de equipamentos, problemas técnicos de infraestrutura, problemas decorrentes de vírus ou da instalação de programas aplicativos, sistemas operacionais e outros.
                                Monitoramento de chamados: A CONTRATADA efetuará monitoramento dos chamados efetuados pelo CONTRATANTE.Caso detectado excesso no número de atendimentos decorrente de problemas técnicos nos equipamentos do CONTRATANTE, falta de conhecimento em informática, falta de conhecimento na área de atuação ou falta de treinamento no sistema, a CONTRATADA se reserva o direito de renegociar o presente contrato.</li>
                        </ul>

                        <p>Confidencialidade: A MyCore irá proteger os dados que você enviar para o Suporte Técnico da mesma maneira que nós protegemos nossos próprios dados confidenciais.No entanto, o Suporte Técnico não pode garantir que seus dados irão ser manuseados de acordo com todos os padrões de regulamentação aplicáveis aos dados.Portanto, por favor não envie ao Sistema MyCore dados sob regulamentações governamentais que requerem cuidados especiais.Se seus dados contém este tipo de informação confidencial, por favor, entre em contato conosco antes de envia-los para discutirmos maneiras para mascarar, ofuscar, ou outros possíveis métodos para converter seus dados para um formato que o Sistema possa manipular.</p>


                        <p>Treinamento: O treinamento referente a operação do sistema será ministrado preferencialmente on-line, de acordo com calendário definido pela CONTRATADA.O treinamento é fortemente recomendado a todos os usuários que utilizarão o sistema.O CONTRATANTE fica desde já autorizado a promover treinamentos internos, com a finalidade de repassar os conhecimentos necessários a utilização do sistema.</p>


                        <p>A CONTRATADA prestará assistência técnica por sua iniciativa, quando se fizer necessário, e por solicitação do CONTRATANTE, neste caso no período agendado, conforme a natureza e a complexidade do serviço relatado.</p>

                        <p>As consultas técnicas somente serão atendidas quando o requisitante for usuário habilitado e treinado para a operação do sistema.</p>

                        <p>As partes se obrigam a respeitar as normas da boa educação, da ética e da moral, abstendo-se do uso de palavras ofensivas, vulgares e de baixo calão.</p>

                        <p>Caso a resolução das dúvidas deva ser executada na sede do CONTRATANTE, o tempo aplicado será faturado separadamente, com prazo de vencimento para o 10º (décimo) dia subsequente ao do fechamento do Relatório de Atendimento Técnico, que será sempre assinado pelo CONTRATANTE.Ao valor das horas referentes ao atendimento técnico serão acrescidas as despesas com locomoção, alimentação e estadia.O atendimento será efetuado mediante agendamento prévio, que dependerá da disponibilidade de técnicos por parte da CONTRATADA.</p>

                        <p>Caso seja necessário, o atendimento pode ser prestado pessoalmente, na sede da CONTRATADA.Nesse caso, o tempo aplicado será faturado separadamente, com prazo de vencimento para o 10º (décimo) dia subsequente ao do atendimento, de acordo com tabela de preços da hora técnica vigente.O atendimento somente será efetuado mediante agendamento prévio, que dependerá da disponibilidade de técnicos por parte da CONTRATADA.</p>

                        <p>As interrupções para manutenção preventiva dos servidores serão comunicadas previamente e programadas para serem executadas em horários alternativos ao uso normal, visando diminuir o impacto na atividade do CONTRATANTE.</p>

                        <p><h3 >Boas Práticas e Governança no Tratamento de dados - Lei 13.709/18 art.50, § 2º</h3></p>

                        <p>Para os fins da aplicação de Boas Práticas e Governança no Tratamento de dados, considera-se: </p>
                        <p><b>CONTROLADOR</b>: A empresa CONTRATANTE dos Serviços de Licença de Uso de Software fornecidos pela MyCore  a quem competem as decisões referentes ao tratamento de dados pessoais; </p>
                        <p><b>OPERADOR</b>: Usuário do Sistema MyCore, que realiza o tratamento de dados pessoais em nome do controlador, seja no acesso à aplicação do Sistema disponibilizado via WEB ou em acesso especial ao Banco de dados no Servidor da CONTRATANTE; </p>
                        <p>A saber: </p>

                        <ul >

                            <li><p>O Sistema MyCore dispõe de recursos que permite criar perfis de usuários do Sistema com diversas configurações de acesso aos dados dos clientes cadastrados na base de dados do Servidor.Esses recursos permitem à empresa CONTROLADORA a salvaguardas adequadas com base em processo de avaliação sistemática de impactos e riscos à privacidade;
                            </p></li>

                            <li><p>Os dados do Sistema MyCore são armazenados em Banco de dados que contam com senha de acesso.A MyCore reserva se o direito de fornecer o login de acesso à empresa CONTRATANTE somente após assinatura de termo de responsabilidade, e também realizar manutenções e correções dos dados armazenados somente mediante solicitação prévia realizada no email de atendimento: <b>contato @mycore.com.br</b>.</p></li>

                        </ul>
                    </div>
                    <p><b>Atualização desta Política</b></p>

                    <p>A MyCore se reserva ao direito de modificar e rever esta política de suporte, sempre de acordo com as necessidades de implementar melhores práticas.Caso esta política seja alterada, uma notificação será encaminhada aos nossos CONTRATANTES.Recomendamos que esta política de suporte seja revisada e divulgada para todos funcionários autorizados para os contatos técnicos com a MyCore.</p>

                    <p><b>A Diretoria</b>.</p>

                </div>
            </div>
            <Footer />
        </div>
    )
}