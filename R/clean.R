library(readxl)
library(jsonlite)
library(lubridate)


# míra nezaměstnanosti - čištění
mira_nezam <- read_excel("../data/mira-nezam-pohlavi-kvartalne-93-17.xlsx")
mira_nezam <- t(mira_nezam)
mira_nezam <- data.frame(mira_nezam)
names(mira_nezam) <- c("celkem", "muži", "ženy")
mira_nezam <- mira_nezam[-1,]
mira_nezam$celkem <- as.numeric(as.character(mira_nezam$celkem))
mira_nezam$muži <- as.numeric(as.character(mira_nezam$muži))
mira_nezam$ženy <- as.numeric(as.character(mira_nezam$ženy))
mira_nezam$období <- row.names(mira_nezam)
row.names(mira_nezam) <- c()
names(mira_nezam) <- c("c", "m", "z", "o")



toJSON(rev(mira_nezam$m))

toJSON(rev(mira_nezam$o))


