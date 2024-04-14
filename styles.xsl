<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Innovation - GenAI</title>
                <link rel="stylesheet" type="text/css" href="styles.css"/>
                <script id="sap-ui-bootstrap"
                        src="https://openui5.hana.ondemand.com/resources/sap-ui-core.js"
                        data-sap-ui-theme="sap_belize"
                        data-sap-ui-libs="sap.m"
                        data-sap-ui-async="true"
                        data-sap-ui-compatVersion="edge"
                        data-sap-ui-resourceroots='{"static_page_template1": "./"}'></script>
            </head>
            <body class="sapUiBody" id="content">
                <!-- Use xsl:copy-of to copy the entire body content -->
                <xsl:copy-of select="/html/body/node()"/>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
