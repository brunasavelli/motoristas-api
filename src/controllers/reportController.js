const PDFDocument = require("pdfkit");

const motoristaModel = require("../models/motoristaModel");

const exportMotoristaPDF = async (req, res) => {
    try {
        const motoristas = await motoristaModel.getMotoristas();

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=motoristas.pdf");

        const doc = new PDFDocument();
        doc.pipe(res);

        //Titulo
        doc.fontSize(20).text("Relatório de Motoristas", {align: "center"});
        doc.moveDown();

        //Cabeçalho
        doc.fontSize(12).text("Id | Nome | Tipo de Habilitação", {underline: true});
        doc.moveDown(0.5);

        //Add dados dos bruxos
        motoristas.forEach((motorista) => {
            doc.text(
                `${ motorista.id} | ${motorista.nome}  | ${motorista.tipo_habilitacao } `
            );
        });

        doc.end();
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar o PDF"});
    }
}

module.exports = { exportMotoristaPDF };