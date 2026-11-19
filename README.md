# Bhumika Sharma - Portfolio (Azure Static Website)

Files: index.html, style.css, script.js. Add resume.pdf (and optionally profile.jpg) next to them.

## Deploy to Azure Blob Storage static website

1. Azure Portal > Resource groups > Create > name: PortfolioProject.
2. Storage accounts > Create > Resource group: PortfolioProject, Standard, LRS, StorageV2, unique lowercase name.
3. Open the storage account > Data management > Static website > Enable.
   Index document name: index.html. Save.
4. Open the $web container > Upload: index.html, style.css, script.js, resume.pdf (and profile.jpg).
5. Open the Primary endpoint URL shown on the Static website page.

### Or with Azure CLI
```
az group create -n PortfolioProject -l centralindia
az storage account create -n <uniquename> -g PortfolioProject -l centralindia --sku Standard_LRS --kind StorageV2
az storage blob service-properties update --account-name <uniquename> --static-website --index-document index.html
az storage blob upload-batch --account-name <uniquename> -s . -d '$web' --overwrite
```

## Before publishing
- Add resume.pdf so the Download Resume button works.
- Optional photo: put profile.jpg beside index.html and replace the BS initials in the .avatar block with an img tag.
- Phone number is intentionally not shown on the public page.

## Cost
Check Cost Management; delete the resource group when finished with your demo.
